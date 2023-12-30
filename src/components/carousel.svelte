<script>
    import { onMount } from "svelte";
    import { fly } from 'svelte/transition'

    /**
     * @type {string | any[]}
     */
    let paintings = [];

    onMount(async () => {
        const res = await fetch("/images.json");
        paintings = await res.json();
    })

    let showText = true;
</script>

<div id="imgCarousel" class="carousel slide h-100 w-100">
    <div class="carousel-inner">
        {#each paintings as painting, i}
            <div class="carousel-item {i === 0 ? "active" : ""}">
                <img src={painting.path} alt={painting.name} on:mouseenter={() => showText = false} on:mouseleave={() => showText = true}/>
                {#if showText}
                    <div in:fly out:fly class="carousel-caption d-none d-md-block bg-light rounded">
                        <h5 class="text-dark display-6 fs-2 fw-bold">{painting.name}</h5>
                        <p class="text-dark display-6 fs-5">{painting.dimension} | {painting.material}</p>
                    </div>   
                {/if}       
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
