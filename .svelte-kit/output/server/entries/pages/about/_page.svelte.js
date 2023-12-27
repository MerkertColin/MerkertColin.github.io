import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: "img.svelte-gc2gs7{object-fit:contain;width:75%;height:75%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let about = {
    education: [],
    exhibitions: { solo: [], group: [] }
  };
  $$result.css.add(css);
  return `<section class="container"><h1 class="display-5 text-center m-4" data-svelte-h="svelte-hy6ag7">About</h1> <img class="rounded d-block mx-auto svelte-gc2gs7" src="/120275647_1367693733436663_8663752487400813982_n.jpg" alt="Martin Winkler"> <hr> <div class="container"><h2 class="display-6" data-svelte-h="svelte-ymzozy">Education</h2> ${about ? `${each(about.education, (education) => {
    return `<p>${escape(education)}</p>`;
  })} <h2 class="display-6" data-svelte-h="svelte-16b6i3i">Exhibitions</h2> <h3 class="display-6 fs-4 fw-bold" data-svelte-h="svelte-1y694f6">Group Exhibitions</h3> ${each(about.exhibitions.group, (groupExhibition) => {
    return `<p>${escape(groupExhibition)}</p>`;
  })}` : ``}</div> </section>`;
});
export {
  Page as default
};
