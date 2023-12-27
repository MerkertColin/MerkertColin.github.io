

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/paintings/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.QvD5nWiV.js","_app/immutable/chunks/scheduler.GJjAvMcU.js","_app/immutable/chunks/index.-quLlP0Y.js","_app/immutable/chunks/index.JpawHTMn.js","_app/immutable/chunks/each.-oqiv04n.js"];
export const stylesheets = ["_app/immutable/assets/5.9H08MW-2.css"];
export const fonts = [];
