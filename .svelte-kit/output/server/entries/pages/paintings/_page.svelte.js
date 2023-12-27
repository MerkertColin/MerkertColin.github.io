import { c as create_ssr_component, d as each, e as escape, f as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
const css = {
  code: "img.svelte-1y7ya8s{object-fit:scale-down;height:100%;width:100%}.carousel-item.svelte-1y7ya8s{width:100vw;height:80vh;padding:10px}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let paintings = [];
  $$result.css.add(css);
  return `<div id="imgCarousel" class="carousel slide h-100 w-100"><div class="carousel-inner">${each(paintings, (painting, i) => {
    return `<div class="${"carousel-item " + escape(i === 0 ? "active" : "", true) + " svelte-1y7ya8s"}"><img class="d-block mx-auto svelte-1y7ya8s"${add_attribute("src", painting.path, 0)}${add_attribute("alt", painting.name, 0)}> ${`<div class="carousel-caption d-none d-md-block bg-light rounded"><h5 class="text-dark display-6 fs-2 fw-bold">${escape(painting.name)}</h5> <p class="text-dark display-6 fs-5">${escape(painting.dimension)}|${escape(painting.material)}</p> </div>`} </div>`;
  })}</div> <button class="carousel-control-prev" type="button" data-bs-target="#imgCarousel" data-bs-slide="prev" data-svelte-h="svelte-3aa77u"><span class="carousel-control-prev-icon bg-dark rounded" aria-hidden="true"></span> <span class="visually-hidden">Previous</span></button> <button class="carousel-control-next" type="button" data-bs-target="#imgCarousel" data-bs-slide="next" data-svelte-h="svelte-1xve0yy"><span class="carousel-control-next-icon bg-dark rounded" aria-hidden="true"></span> <span class="visually-hidden">Next</span></button> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section><h1 class="display-5 text-center m-4" data-svelte-h="svelte-8y8nnz">Paintings</h1> ${validate_component(Carousel, "Carousel").$$render($$result, {}, {}, {})}</section>`;
});
export {
  Page as default
};
