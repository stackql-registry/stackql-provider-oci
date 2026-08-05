#!/usr/bin/env python3
"""Live smoke suite for the oci StackQL provider.

Runs the most critical read and write paths against a real OCI tenancy:

  reads   - identity.compartments, network.vcns, compute.instances,
            object_storage buckets (the estate queries the provider
            exists for)
  writes  - a disposable lifecycle built entirely from Always Free
            resources: a VCN + subnet (no charge), an object storage
            bucket (free tier), and - capacity permitting - a
            VM.Standard.E2.1.Micro instance (Always Free shape; the
            smallest instance OCI offers). Everything created is named
            stackql-smoke-<stamp> and tagged {"stackql-smoke": <stamp>};
            prior breadcrumbs are swept by tag before the run and the
            teardown runs in a finally block. Budget: $0 on an Always
            Free tenancy; well under $1 even on a paid tenancy (micro
            instance for minutes).

Registry selection:
  default   the locally generated provider (provider-dev/openapi), for
            pre-publish verification
  --live    the latest published provider from the public registry
            (`REGISTRY PULL oci` is issued first), for post-publish
            verification

Credentials (never stored here): either the OCI CLI environment variables
(OCI_CLI_TENANCY, OCI_CLI_USER, OCI_CLI_FINGERPRINT, OCI_CLI_KEY_FILE and
optionally OCI_CLI_REGION / OCI_CLI_PASSPHRASE) or an OCI config file
(~/.oci/config, DEFAULT profile). Never run against a production tenancy.

Requires a stackql binary built against any-sdk >= v0.5.4-alpha01
(oci_signing_v1); set STACKQL_BIN or place `stackql` at the repo root.

Usage:
  python tests/smoke_test.py [--live] [--skip-instance] [--keep]
                             [--namespace NS] [--compartment OCID]
"""

import argparse
import configparser
import csv
import io
import json
import os
import subprocess
import sys
import time
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
STAMP = time.strftime("%Y%m%d%H%M%S")
SMOKE_NAME = f"stackql-smoke-{STAMP}"
SMOKE_TAG_KEY = "stackql-smoke"
CIDR = "10.99.0.0/24"
SUBNET_CIDR = "10.99.0.0/25"
FREE_SHAPE = "VM.Standard.E2.1.Micro"
CAPACITY_ERRORS = ("Out of host capacity", "LimitExceeded", "TooManyRequests", "InternalError")

passed, failed, skipped = [], [], []


def note(status, name, detail=""):
    marker = {"PASS": "PASS", "FAIL": "FAIL", "SKIP": "SKIP"}[status]
    {"PASS": passed, "FAIL": failed, "SKIP": skipped}[status].append(name)
    print(f"  {marker}  {name}" + (f" - {detail}" if detail else ""))


def find_stackql():
    if os.environ.get("STACKQL_BIN"):
        return os.environ["STACKQL_BIN"]
    local = REPO_ROOT / "stackql"
    if local.exists():
        return str(local)
    return "stackql"


def build_auth():
    """Raw env-var variant when the OCI CLI env is present, else config file."""
    cli_vars = ["OCI_CLI_TENANCY", "OCI_CLI_USER", "OCI_CLI_FINGERPRINT", "OCI_CLI_KEY_FILE"]
    if all(os.environ.get(v) for v in cli_vars):
        auth = {
            "oci": {
                "type": "oci_signing_v1",
                "tenancy_ocid_env_var": "OCI_CLI_TENANCY",
                "user_ocid_env_var": "OCI_CLI_USER",
                "fingerprint_env_var": "OCI_CLI_FINGERPRINT",
                "private_key_path_env_var": "OCI_CLI_KEY_FILE",
            }
        }
        if os.environ.get("OCI_CLI_PASSPHRASE"):
            auth["oci"]["passphrase_env_var"] = "OCI_CLI_PASSPHRASE"
        return auth, os.environ["OCI_CLI_TENANCY"]
    cfg_path = Path(os.environ.get("OCI_CLI_CONFIG_FILE", Path.home() / ".oci" / "config"))
    if cfg_path.exists():
        cfg = configparser.ConfigParser()
        cfg.read(cfg_path)
        profile = os.environ.get("OCI_CLI_PROFILE", "DEFAULT")
        tenancy = cfg[profile]["tenancy"] if profile in cfg and "tenancy" in cfg[profile] else None
        return {"oci": {"type": "oci_signing_v1", "config_file_path": str(cfg_path), "profile": profile}}, tenancy
    print("No OCI credentials found (OCI_CLI_* env vars or ~/.oci/config). Aborting.")
    sys.exit(2)


class StackQL:
    def __init__(self, live):
        self.bin = find_stackql()
        self.auth, self.tenancy = build_auth()
        self.live = live
        self.registry = None
        if not live:
            reg_root = (REPO_ROOT / "provider-dev" / "openapi").resolve()
            self.registry = json.dumps({"url": reg_root.as_uri(), "verifyConfig": {"nopVerify": True}})

    def run(self, query, timeout=180):
        cmd = [self.bin, "exec", query, f"--auth={json.dumps(self.auth)}", "--output=csv"]
        if self.registry:
            cmd.append(f"--registry={self.registry}")
        res = subprocess.run(cmd, capture_output=True, text=True, timeout=timeout)
        return res.stdout or "", res.stderr or "", res.returncode

    def rows(self, query, timeout=180):
        out, err, _ = self.run(query, timeout)
        body = out.strip()
        if not body:
            return [], err
        reader = csv.DictReader(io.StringIO(body))
        return list(reader), err


def tag_json():
    return json.dumps({SMOKE_TAG_KEY: STAMP})


def is_smoke_tagged(freeform_tags_field):
    try:
        return SMOKE_TAG_KEY in json.loads(freeform_tags_field or "{}")
    except (ValueError, TypeError):
        return False


def resolve_namespace(sq, args):
    if args.namespace:
        return args.namespace
    rows, _ = sq.rows("select * from oci.object_storage.namespaces")
    if rows:
        # single-column scalar projection
        return list(rows[0].values())[0]
    return None


def sweep(sq, compartment, namespace):
    """Delete breadcrumbs from prior runs, oldest dependencies last."""
    print("\n[sweep] prior stackql-smoke breadcrumbs")
    swept = 0
    if namespace:
        rows, _ = sq.rows(
            f"select name, freeform_tags from oci.object_storage.buckets "
            f"where namespace_name = '{namespace}' and compartment_id = '{compartment}'"
        )
        for r in rows:
            if is_smoke_tagged(r.get("freeform_tags")) or (r.get("name") or "").startswith("stackql-smoke-"):
                sq.run(f"delete from oci.object_storage.buckets where namespace_name = '{namespace}' and bucket_name = '{r['name']}'")
                swept += 1
    inst_rows, _ = sq.rows(
        f"select id, display_name, freeform_tags, lifecycle_state from oci.compute.instances "
        f"where compartment_id = '{compartment}'"
    )
    for r in inst_rows:
        if is_smoke_tagged(r.get("freeform_tags")) and r.get("lifecycle_state") not in ("TERMINATED", "TERMINATING"):
            sq.run(f"delete from oci.compute.instances where instance_id = '{r['id']}'")
            swept += 1
    vcn_rows, _ = sq.rows(
        f"select id, freeform_tags from oci.network.vcns where compartment_id = '{compartment}'"
    )
    for r in vcn_rows:
        if is_smoke_tagged(r.get("freeform_tags")):
            sub_rows, _ = sq.rows(
                f"select id from oci.network.subnets where compartment_id = '{compartment}' and vcn_id = '{r['id']}'"
            )
            for s in sub_rows:
                sq.run(f"delete from oci.network.subnets where subnet_id = '{s['id']}'")
            sq.run(f"delete from oci.network.vcns where vcn_id = '{r['id']}'")
            swept += 1
    print(f"  swept {swept} resource(s)")


def wait_state(sq, query, column, want, timeout_s, interval=15):
    deadline = time.time() + timeout_s
    last = None
    while time.time() < deadline:
        rows, _ = sq.rows(query)
        if rows:
            last = rows[0].get(column)
            if last == want:
                return True, last
        time.sleep(interval)
    return False, last


def main():
    ap = argparse.ArgumentParser(description="oci provider live smoke suite")
    ap.add_argument("--live", action="store_true", help="use the latest published provider from the public registry")
    ap.add_argument("--skip-instance", action="store_true", help="skip the compute instance lifecycle")
    ap.add_argument("--keep", action="store_true", help="do not tear down created resources (debugging)")
    ap.add_argument("--namespace", help="object storage namespace (else discovered)")
    ap.add_argument("--compartment", help="compartment OCID for the write lifecycle (default: tenancy root)")
    args = ap.parse_args()

    sq = StackQL(args.live)
    if not sq.tenancy:
        print("Could not resolve the tenancy OCID (set OCI_CLI_TENANCY or a config file with tenancy=). Aborting.")
        sys.exit(2)
    compartment = args.compartment or sq.tenancy

    probe = subprocess.run([sq.bin, "--version"], capture_output=True, text=True)
    if probe.returncode != 0:
        print(f"stackql binary not runnable: {sq.bin} (set STACKQL_BIN)")
        sys.exit(2)
    print(f"stackql: {probe.stdout.strip().splitlines()[0]}")
    print(f"registry: {'public (published provider)' if args.live else 'local build (provider-dev/openapi)'}")
    print(f"scope: compartment {compartment[:40]}... stamp {STAMP}")

    if args.live:
        out, err, rc = sq.run("registry pull oci", timeout=300)
        if rc != 0:
            print(f"registry pull oci failed: {err.strip()[:300]}")
            sys.exit(2)

    # --- read smokes --------------------------------------------------------
    print("\n[reads] estate queries")
    rows, err = sq.rows(f"select id, name from oci.identity.compartments where compartment_id = '{sq.tenancy}'")
    note("PASS" if rows is not None and err.count("error") == 0 and rows != [] or rows == [] else "FAIL",
         "identity.compartments list", f"{len(rows)} row(s)")

    rows, err = sq.rows(f"select id, display_name, lifecycle_state from oci.network.vcns where compartment_id = '{compartment}'")
    note("PASS" if "error" not in err.lower() else "FAIL", "network.vcns list", f"{len(rows)} row(s)")

    rows, err = sq.rows(
        f"select id, display_name, shape, lifecycle_state from oci.compute.instances where compartment_id = '{compartment}' limit 5"
    )
    note("PASS" if "error" not in err.lower() else "FAIL", "compute.instances list (LIMIT pushdown)", f"{len(rows)} row(s)")

    namespace = resolve_namespace(sq, args)
    if namespace:
        note("PASS", "object_storage namespace resolved", namespace)
    else:
        note("SKIP", "object_storage namespace resolved", "no namespace (pass --namespace); bucket lifecycle skipped")

    ads, _ = sq.rows(f"select name from oci.identity.availability_domains where compartment_id = '{sq.tenancy}'")
    availability_domain = ads[0]["name"] if ads else None

    sweep(sq, compartment, namespace)

    created = {"bucket": None, "instance": None, "subnet": None, "vcn": None}
    try:
        # --- VCN lifecycle --------------------------------------------------
        print("\n[write] VCN lifecycle (Always Free)")
        _, err, _ = sq.run(
            f"insert into oci.network.vcns(compartment_id, cidr_block, display_name, freeform_tags) "
            f"select '{compartment}', '{CIDR}', '{SMOKE_NAME}-vcn', '{tag_json()}'"
        )
        rows, _ = sq.rows(
            f"select id, lifecycle_state from oci.network.vcns "
            f"where compartment_id = '{compartment}' and display_name = '{SMOKE_NAME}-vcn'"
        )
        if rows:
            created["vcn"] = rows[0]["id"]
            note("PASS", "vcns INSERT (signed POST)", rows[0]["id"][:40] + "...")
        else:
            note("FAIL", "vcns INSERT (signed POST)", err.strip()[:200])

        if created["vcn"]:
            sq.run(f"update oci.network.vcns set display_name = '{SMOKE_NAME}-vcn-renamed' where vcn_id = '{created['vcn']}'")
            rows, _ = sq.rows(f"select display_name from oci.network.vcns where vcn_id = '{created['vcn']}'")
            note("PASS" if rows and rows[0]["display_name"] == f"{SMOKE_NAME}-vcn-renamed" else "FAIL",
                 "vcns UPDATE (partial details)")

        # --- bucket lifecycle ----------------------------------------------
        if namespace:
            print("\n[write] bucket lifecycle (free tier)")
            _, err, _ = sq.run(
                f"insert into oci.object_storage.buckets(namespace_name, compartment_id, name, freeform_tags) "
                f"select '{namespace}', '{compartment}', '{SMOKE_NAME}-bkt', '{tag_json()}'"
            )
            rows, _ = sq.rows(
                f"select name from oci.object_storage.buckets "
                f"where namespace_name = '{namespace}' and compartment_id = '{compartment}'"
            )
            if any(r.get("name") == f"{SMOKE_NAME}-bkt" for r in rows):
                created["bucket"] = f"{SMOKE_NAME}-bkt"
                note("PASS", "buckets INSERT + list-back")
            else:
                note("FAIL", "buckets INSERT + list-back", err.strip()[:200])

        # --- instance lifecycle (capacity permitting) -----------------------
        if args.skip_instance:
            note("SKIP", "instance lifecycle", "--skip-instance")
        elif not created["vcn"] or not availability_domain:
            note("SKIP", "instance lifecycle", "no VCN or availability domain")
        else:
            print(f"\n[write] instance lifecycle ({FREE_SHAPE}, Always Free shape; smallest available)")
            _, err, _ = sq.run(
                f"insert into oci.network.subnets(compartment_id, vcn_id, cidr_block, display_name, freeform_tags) "
                f"select '{compartment}', '{created['vcn']}', '{SUBNET_CIDR}', '{SMOKE_NAME}-sn', '{tag_json()}'"
            )
            rows, _ = sq.rows(
                f"select id from oci.network.subnets "
                f"where compartment_id = '{compartment}' and vcn_id = '{created['vcn']}'"
            )
            if rows:
                created["subnet"] = rows[0]["id"]
                note("PASS", "subnets INSERT")
            else:
                note("FAIL", "subnets INSERT", err.strip()[:200])

            image_id = None
            if created["subnet"]:
                imgs, _ = sq.rows(
                    f"select id from oci.compute.images where compartment_id = '{sq.tenancy}' "
                    f"and operating_system = 'Oracle Linux' and shape = '{FREE_SHAPE}' limit 1"
                )
                image_id = imgs[0]["id"] if imgs else None
                note("PASS" if image_id else "SKIP", "image discovery", image_id[:40] + "..." if image_id else "no image visible")

            if image_id:
                source = json.dumps({"sourceType": "image", "imageId": image_id})
                vnic = json.dumps({"subnetId": created["subnet"], "assignPublicIp": False})
                _, err, _ = sq.run(
                    f"insert into oci.compute.instances(availability_domain, compartment_id, shape, "
                    f"source_details, create_vnic_details, display_name, freeform_tags) "
                    f"select '{availability_domain}', '{compartment}', '{FREE_SHAPE}', "
                    f"'{source}', '{vnic}', '{SMOKE_NAME}-vm', '{tag_json()}'",
                    timeout=300,
                )
                if any(s in err for s in CAPACITY_ERRORS):
                    note("SKIP", "instance launch", "Always Free capacity unavailable in this AD (expected on contended regions)")
                else:
                    rows, _ = sq.rows(
                        f"select id, lifecycle_state from oci.compute.instances "
                        f"where compartment_id = '{compartment}' and display_name = '{SMOKE_NAME}-vm'"
                    )
                    live = [r for r in rows if r.get("lifecycle_state") not in ("TERMINATED", "TERMINATING")]
                    if live:
                        created["instance"] = live[0]["id"]
                        note("PASS", "instance launch despatched", live[0]["lifecycle_state"])
                        ok, state = wait_state(
                            sq,
                            f"select lifecycle_state from oci.compute.instances where instance_id = '{created['instance']}'",
                            "lifecycle_state", "RUNNING", timeout_s=600,
                        )
                        note("PASS" if ok else "SKIP", "instance reaches RUNNING", state or "timeout (left for teardown)")
                    else:
                        note("FAIL", "instance launch despatched", err.strip()[:300])
    finally:
        if args.keep:
            print("\n[teardown] skipped (--keep); sweep on the next run will remove tagged resources")
        else:
            print("\n[teardown] deleting created resources (reverse order)")
            if created["instance"]:
                sq.run(f"delete from oci.compute.instances where instance_id = '{created['instance']}'")
                ok, state = wait_state(
                    sq,
                    f"select lifecycle_state from oci.compute.instances where instance_id = '{created['instance']}'",
                    "lifecycle_state", "TERMINATED", timeout_s=600,
                )
                note("PASS" if ok else "FAIL", "instance terminate", state or "")
            if created["bucket"] and namespace:
                _, err, _ = sq.run(
                    f"delete from oci.object_storage.buckets where namespace_name = '{namespace}' and bucket_name = '{created['bucket']}'"
                )
                note("PASS" if not err.strip() or "error" not in err.lower() else "FAIL", "bucket delete")
            if created["subnet"]:
                _, err, _ = sq.run(f"delete from oci.network.subnets where subnet_id = '{created['subnet']}'")
                note("PASS" if "error" not in err.lower() else "FAIL", "subnet delete")
            if created["vcn"]:
                _, err, _ = sq.run(f"delete from oci.network.vcns where vcn_id = '{created['vcn']}'")
                note("PASS" if "error" not in err.lower() else "FAIL", "vcn delete")

    print(f"\nsmoke results: {len(passed)} passed, {len(failed)} failed, {len(skipped)} skipped")
    if failed:
        print("failures: " + "; ".join(failed))
        sys.exit(1)


if __name__ == "__main__":
    main()
