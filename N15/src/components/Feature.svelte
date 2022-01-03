<script lang="ts">
    import { currentItem } from "../store";

    let show = false;
    let link = "";
    let title = "";
    let description = "";
    $: {
        show = $currentItem != null;
        if (show) {
            ({ title, description } = $currentItem);
            link = `https://www.youtube.com/embed/${$currentItem.id}`;
        }
    }
</script>

{#if show}
    <div class="feature h-full overflow-y-auto">
        <div class="embed">
            <iframe
                width="100%"
                height="500"
                src={link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
        </div>
        <h2 class="text-3xl font-semibold my-5">{title}</h2>
        {#each description as p }
            <p class="text-base mt-0 mb-2 min-h-2">{p}</p>
        {/each}
    </div>
{:else}
    <h2 class="text-3xl font-semibold">Loading...</h2>
{/if}

<style>
.feature {
  grid-area: feature;
}
</style>
