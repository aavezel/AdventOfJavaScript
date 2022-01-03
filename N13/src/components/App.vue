<template>
    <div class="wrapper">
        <image-map />
        <modal v-if="isShowModal" />
    </div>
</template>

<script>
import {mapState} from 'vuex'
import ImageMap from "./ImageMap.vue";
import Modal from "./Modal.vue";

export default {
    components: { ImageMap, Modal },
    computed: {
        isShowModal() {
            return this.currentItem !== null;
        },
        ...mapState(['currentItem'])
    }

};
</script>

<style scoped></style>
