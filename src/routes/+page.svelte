<script>
    import { inTransitionParams, outTransitionParams } from "$lib/transitioning";
    import { fly } from "svelte/transition";
</script>

<section class="d-flex" in:fly={inTransitionParams} out:fly={outTransitionParams}>
    <h1>MARTIN WINKLER</h1>
</section>

<style>
    h1 {
        font-size: 10vw;
        margin: auto
    }

    section {
        width: 100vw;
        height: 80vh;
    }
</style>