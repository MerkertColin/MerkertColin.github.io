<script>
    import { inTransitionParams, outTransitionParams } from '$lib/transitioning';
    import { fly } from 'svelte/transition'
    import Lightbox from '../../components/lightbox.svelte';
</script>

<section in:fly={inTransitionParams} out:fly={outTransitionParams}>
    <h1 class="display-5 text-center m-4">Paintings</h1>
    <Lightbox />
</section>