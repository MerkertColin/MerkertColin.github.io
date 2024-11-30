<script>
    /**@type {string | undefined}*/
    export let title = undefined;

    /**@type {string | undefined}*/
    export let description = undefined;

    /**@type {string | undefined}*/
    export let imgPath = undefined;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click class="card">
    <img class="card-img img-thumbnail" {title} src={imgPath} alt={title} loading="lazy" />
    {#if description && title}
        <div class="card-img-overlay float-end">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    {/if}
</div>

<style>
    .card-img-overlay {
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    justify-content: center;
    border: none;
    border-radius: none;
    opacity: 0;
}

.card:hover .card-img-overlay {
    opacity: 1;
}

img {
    border-radius: 0;
    border: none;
}

.card {
    border: none;
}
</style>