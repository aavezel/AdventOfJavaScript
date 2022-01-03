<script lang="ts">
    import {imagesList, selectedImageIndex} from './store';
    let box;

    selectedImageIndex.subscribe((index) => {
        if (box) {
            const selector = index === 0 ? 'li:first-child' : `li:nth-child(${index})`;
            const li = box.querySelector(selector);
            if (li) {
                box.scrollTo({left: li.offsetLeft, top: 0, behavior: 'smooth'});
            }
        }
    })

    const handleSelect = (i) => () => {
        selectedImageIndex.set(i);
    }
</script>

<div class="thumbnails" bind:this={box}>
    <ul>
        {#each $imagesList as image, i}
        <li>
            <a href={"#"} class:selected="{i === $selectedImageIndex}" on:click={handleSelect(i)}>
                <img src={'/images/'+image.image} alt={image.caption} />
            </a>
        </li>
        {/each}
    </ul>
</div>