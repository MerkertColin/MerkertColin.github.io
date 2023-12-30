<script>
    import { inTransitionParams, outTransitionParams } from "$lib/transitioning";
    import { fly } from "svelte/transition";

    const sketches = ['1.png', '2.png', '3.png', '4.png', '5.png']
</script>

<section in:fly={inTransitionParams} out:fly={outTransitionParams}>
    <h1 class="display-5 text-center m-4">Sketchbook</h1>
    
    <div id="imgCarousel" class="carousel slide h-100 w-100">
        <div class="carousel-inner">
            {#each sketches as sketch, i}
                <div class="carousel-item {i === 0 ? "active" : ""}">
                    <img  src={'/images/sketchbook_drawings/' + sketch} alt={"Sketch Page " + (i + 1)} />
                </div>
            {/each}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#imgCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-dark rounded" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#imgCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-dark rounded" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>    
</section>

<style>
    img {
        object-fit:scale-down;
        height: 100%;
        width: 100%;
    }

    .carousel-item {
        width: 100vw;
        height: 80vh;
        padding: 10px;
    }

</style>