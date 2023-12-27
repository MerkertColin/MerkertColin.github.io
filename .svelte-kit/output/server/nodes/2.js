

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.8OEAam8J.js","_app/immutable/chunks/scheduler.GJjAvMcU.js","_app/immutable/chunks/index.-quLlP0Y.js","_app/immutable/chunks/index.JpawHTMn.js"];
export const stylesheets = ["_app/immutable/assets/2.XBKQdSj3.css"];
export const fonts = [];
