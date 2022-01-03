<script lang="ts">
    import AsideItem from "./AsideItem.svelte";
    import { items } from "../store";
</script>

<aside class="aside h-full overflow-y-scroll">
    <ul class="list-none m-0 p-0">
        {#each $items as item}
            <li class="mb-5">
                <AsideItem data={item} />
            </li>
        {/each}
    </ul>
</aside>

<style>
.aside {
  grid-area: aside;
}
</style>