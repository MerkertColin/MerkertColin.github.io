import { c as create_ssr_component, d as each, e as escape, f as add_attribute } from "../../../chunks/ssr.js";
const css = {
  code: "img.svelte-1ko8hn7{object-fit:scale-down;height:100%;width:100%}.carousel-item.svelte-1ko8hn7{width:100vw;height:80vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const sketches = ["1.png", "2.png", "3.png", "4.png", "5.png"];
  $$result.css.add(css);
  return `<section><h1 class="display-5 text-center m-4" data-svelte-h="svelte-rlwn27">Sketchbook</h1> <div id="imgCarousel" class="carousel slide h-100 w-100"><div class="carousel-inner">${each(sketches, (sketch, i) => {
    return `<div class="${"carousel-item " + escape(i === 0 ? "active" : "", true) + " svelte-1ko8hn7"}"><img class="d-block mx-auto svelte-1ko8hn7"${add_attribute("src", "/images/sketchbook_drawings/" + sketch, 0)}${add_attribute("alt", "Sketch Page " + (i + 1), 0)}> </div>`;
  })}</div> <button class="carousel-control-prev" type="button" data-bs-target="#imgCarousel" data-bs-slide="prev" data-svelte-h="svelte-1ymdrm2"><span class="carousel-control-prev-icon bg-dark rounded" aria-hidden="true"></span> <span class="visually-hidden">Previous</span></button> <button class="carousel-control-next" type="button" data-bs-target="#imgCarousel" data-bs-slide="next" data-svelte-h="svelte-16lq1d6"><span class="carousel-control-next-icon bg-dark rounded" aria-hidden="true"></span> <span class="visually-hidden">Next</span></button></div> </section>`;
});
export {
  Page as default
};
