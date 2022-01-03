<script lang="ts">
    import {selectedImageIndex} from './store';
</script>

<a href={"#"} class="left" on:click={selectedImageIndex.prev}><img src="./images/chevron.svg" alt="" /></a>
<a href={"#"} class="right" on:click={selectedImageIndex.next}><img src="./images/chevron.svg" alt=""/></a>