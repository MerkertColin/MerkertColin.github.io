

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sketchbook/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.0Gxju6L4.js","_app/immutable/chunks/scheduler.GJjAvMcU.js","_app/immutable/chunks/index.-quLlP0Y.js","_app/immutable/chunks/each.-oqiv04n.js","_app/immutable/chunks/index.JpawHTMn.js"];
export const stylesheets = ["_app/immutable/assets/6.L21-njfb.css"];
export const fonts = [];
