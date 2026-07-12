// The core `iaas` spec divides into three StackQL services by operation tag.
// The spec tags every operation with exactly one of four tags (verified over
// the 490-operation snapshot: virtualNetwork 267, compute 130,
// computeManagement 33, blockstorage 60). Unknown tags fail loudly so a spec
// refresh that introduces a new tag forces a deliberate assignment here.

export const CORE_TAG_TO_SERVICE = {
  virtualNetwork: 'network',
  compute: 'compute',
  computeManagement: 'compute',
  blockstorage: 'block_storage'
};

export const CORE_SERVICES = [...new Set(Object.values(CORE_TAG_TO_SERVICE))].sort();

// provider-utils discriminator signature: fn(pathKey, operationId, tags, { providerName, pathItem, operation })
export function coreServiceForOperation(pathKey, operationId, tags, ctx) {
  const opTags = (ctx && ctx.operation && ctx.operation.tags) || tags || [];
  for (const t of opTags) {
    if (CORE_TAG_TO_SERVICE[t]) return CORE_TAG_TO_SERVICE[t];
  }
  throw new Error(`core spec operation has no recognised service tag: ${operationId || pathKey} (tags: ${JSON.stringify(opTags)})`);
}
