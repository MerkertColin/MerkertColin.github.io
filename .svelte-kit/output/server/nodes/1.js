

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8i9axv_X.js","_app/immutable/chunks/scheduler.GJjAvMcU.js","_app/immutable/chunks/index.-quLlP0Y.js","_app/immutable/chunks/singletons.1Mvws-Uq.js"];
export const stylesheets = [];
export const fonts = [];
