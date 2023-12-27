import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: "h1.svelte-1rhay9p{font-size:10vw;margin:auto\n    }section.svelte-1rhay9p{width:100vw;height:80vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="d-flex svelte-1rhay9p" data-svelte-h="svelte-am6til"><h1 class="svelte-1rhay9p">MARTIN WINKLER</h1> </section>`;
});
export {
  Page as default
};
