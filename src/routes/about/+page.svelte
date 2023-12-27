<script>
    import { outTransitionParams, inTransitionParams } from '$lib/transitioning';
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition'

    let about = {
        education: [],
        exhibitions: {
            solo: [],
            group: []
        }
    };

    onMount(async () => {
        const res = await fetch('/about.json');
        about = await res.json();
    })

</script>

<section class="container" in:fly={inTransitionParams} out:fly={outTransitionParams}>
    <h1 class="display-5 text-center m-4">About</h1>
    <img class="rounded d-block mx-auto" src="/120275647_1367693733436663_8663752487400813982_n.jpg" alt="Martin Winkler" />
    <hr />
    <div class="container">
        <h2 class="display-6">Education</h2>
        {#if about}
        {#each about.education as education}
            <p>{education}</p>
        {/each}
        <h2 class="display-6">Exhibitions</h2>
        <h3 class="display-6 fs-4 fw-bold">Group Exhibitions</h3>
        {#each about.exhibitions.group as groupExhibition}
            <p>{groupExhibition}</p>
        {/each}
        {/if}
    </div>
</section>

<style>
    img {
        object-fit: contain;
        width: 75%;
        height: 75%;
    }
</style>