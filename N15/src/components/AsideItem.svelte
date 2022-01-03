<script lang="ts">
    import {currentItem} from '../store';

    export let data: ListItem;

    const {id, title} = data;
    const image = `https://i.ytimg.com/vi/${id}/default.jpg`

    function handleSelect() {
        currentItem.setItemId(id);
    }
</script>

<a
    class="flex items-center gap-8 text-white no-underline"
    href="/#"
    on:click|preventDefault={handleSelect}
>
    <img src={image} alt={title}>
    <h3 class="m-0 p-0 text-base font-semibold">{title}</h3>
</a>