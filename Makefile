# Build pipeline for the oci StackQL provider. Every step is deterministic
# and re-runnable; scripts validate and fail without writing (see CLAUDE.md).
#
# POSIX shell recipes - run under Linux/macOS/CI or WSL/Git Bash on Windows.
#
# Variables:
#   STACKQL_BIN  path to a stackql binary built against any-sdk >= v0.5.4-alpha01
#                (oci_signing_v1); default ./stackql at the repo root
#
# `make all` runs the full pipeline: deps -> specs -> build -> tests -> docs.
# The live smoke suite (`make smoke` / `make smoke-live`) needs OCI
# credentials and is intentionally NOT part of `all`.

STACKQL_BIN ?= ./stackql
NODE ?= node
PROVIDER_DIR = provider-dev/openapi/src/oci

.PHONY: all deps harvest fetch-specs clean-specs specs split mappings normalize provider build \
        test-offline test-integration test-meta test smoke smoke-live docs website all-help

all: deps specs build test-integration docs
	@echo "make all complete: specs -> provider -> integration tests -> docs"

deps:
	npm install

# --- step 0: catalog, harvest, clean ----------------------------------------

harvest:
	$(NODE) provider-dev/scripts/harvest_catalog.mjs

fetch-specs:
	bash ./bin/fetch-specs.sh

clean-specs:
	$(NODE) provider-dev/scripts/clean_specs.mjs

specs: fetch-specs clean-specs

# --- steps 1-4: split -> mappings -> normalize -> generate ------------------

split:
	$(NODE) bin/split.mjs --provider-name oci \
	  --input-dir provider-dev/downloaded/cleaned \
	  --output-dir provider-dev/source --overwrite

mappings:
	$(NODE) bin/generate-mappings.mjs --provider-name oci \
	  --input-dir provider-dev/source --output-dir provider-dev/config
	$(NODE) provider-dev/scripts/map_operations.mjs

normalize:
	$(NODE) bin/normalize.mjs --api-dir provider-dev/source

provider:
	rm -rf provider-dev/openapi/src
	$(NODE) bin/generate-provider.mjs --provider-name oci \
	  --input-dir provider-dev/source \
	  --output-dir $(PROVIDER_DIR) \
	  --config-path provider-dev/config/all_services.csv \
	  --provider-config '{"auth": {"type": "oci_signing_v1"}}' \
	  --naive-req-body-translate \
	  --overwrite
	$(NODE) provider-dev/scripts/post_process.mjs

build: split mappings normalize provider

# --- step 5: tests ----------------------------------------------------------

# SHOW/DESCRIBE against the local registry through a real binary
test-offline:
	$(STACKQL_BIN) exec \
	  --registry='{"url": "file://$(CURDIR)/provider-dev/openapi", "verifyConfig": {"nopVerify": true}}' \
	  "show services in oci"

# signed mock: auth wire shapes, pagination traversal, pushdown, lifecycle
test-integration:
	STACKQL_BIN=$(STACKQL_BIN) $(NODE) tests/integration/run_integration_tests.mjs

test-meta:
	bash ./bin/start-server.sh
	$(NODE) ./bin/test-meta-routes.cjs oci --verbose || (bash ./bin/stop-server.sh; exit 1)
	bash ./bin/stop-server.sh

test: test-integration

# live smokes (Always Free tenancy; OCI_* env or ~/.oci/config required)
smoke:
	STACKQL_BIN=$(STACKQL_BIN) python3 -u tests/smoke_test.py

smoke-live:
	STACKQL_BIN=$(STACKQL_BIN) python3 -u tests/smoke_test.py --live

# --- step 7: docs -----------------------------------------------------------

docs:
	npm run generate-docs -- \
	  --provider-name oci \
	  --provider-dir ./$(PROVIDER_DIR)/v00.00.00000 \
	  --output-dir ./website \
	  --provider-data-dir ./provider-dev/docgen/provider-data
	cd website && npm run sanitize-docs

website:
	cd website && yarn install && yarn build

all-help:
	@echo "targets: deps harvest fetch-specs clean-specs split mappings normalize provider build"
	@echo "         test-offline test-integration test-meta smoke smoke-live docs website all"
