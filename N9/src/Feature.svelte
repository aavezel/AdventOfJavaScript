<script lang="ts">
    import {selectedImage} from './store'
</script>

<div class="feature">
    <img src={'/images/' + $selectedImage.image} alt="Featured" />
    <div class="caption">{$selectedImage.caption}</div>
</div>
