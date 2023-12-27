import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-svelte-h="svelte-wkji86"><div class="container-fluid"><a class="navbar-brand " href="/">MARTIN WINKLER</a> <div class="navbar-nav"><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="paintings" role="button" data-bs-toggle="dropdown" aria-expanded="false">Work</a> <ul class="dropdown-menu"><li><a class="dropdown-item" href="paintings">Paintings</a></li> <li><a class="dropdown-item" href="sketchbook">Sketchbook</a></li></ul></li> <a class="nav-link" href="about">About</a> <a class="nav-link" href="contact">Contact</a> <div class=""></div></div></div></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${$$result.head += `<!-- HEAD_svelte-1abxp6_START -->${$$result.title = `<title>Martin Winkler</title>`, ""}<!-- HEAD_svelte-1abxp6_END -->`, ""} <main>${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
