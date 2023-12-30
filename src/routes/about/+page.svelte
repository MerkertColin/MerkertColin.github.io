<script>
    import { outTransitionParams, inTransitionParams } from '$lib/transitioning';
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition'

    /**
     * @typedef {object} AboutInfo
     * @property {string} timeframe
     * @property {string} info
    */

    /** 
    * @typedef {object} About
    * @property {AboutInfo[]} about.education
    * @property {AboutInfo[]} about.education
    * @property {Object} about.exhibitions
    * @property {AboutInfo[]} about.exhibitions.solo
    * @property {AboutInfo[]} about.exhibitions.group
    */

    /**
     * @type {About}
     */
    let about;

    onMount(async () => {
        const res = await fetch('/about.json');
        about = await res.json();
    })

</script>

<section class="container" in:fly={inTransitionParams} out:fly={outTransitionParams}>
    <h1 class="display-5 text-center m-4">About</h1>
    <img class="rounded d-block mx-auto" src="/120275647_1367693733436663_8663752487400813982_n.jpg" alt="Martin Winkler" />
    <p class="text-center pt-3">Martin Winkler – born in Halle &#040;Saale&#041;, Germany – lives and works in Kassel, Germany</p>
    <hr />
    <div class="container">
        <h2 class="display-6">Education</h2>
        {#if about}
            {#each about.education as education}
                <p><b>{education.timeframe}</b> {education.info}</p>
            {/each}
            <h2 class="display-6">Exhibitions</h2>
            {#if about.exhibitions.solo.length > 0}
                <h3 class="display-6 fs-4 fw-bold">Solo Exhibitions</h3>
                {#each about.exhibitions.solo as soloExhibition}
                    <p><b>{soloExhibition.timeframe}</b> {soloExhibition.info}</p>
                {/each}
            {/if}
            {#if about.exhibitions.group.length > 0}
                <h3 class="display-6 fs-4 fw-bold">Group Exhibitions</h3>
                {#each about.exhibitions.group as groupExhibition}
                    <p><b>{groupExhibition.timeframe}</b> {groupExhibition.info}</p>
                {/each}
            {/if}
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