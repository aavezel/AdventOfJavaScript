<template>
    <a href="#" @click="clickLink">
        <circle class="dot" :cx="x" :cy="y" r="17.5" :id="id" />
        <circle id="my-circle" :cx="x" :cy="y" r="22" stroke="#F41E82" stroke-width="6px" opacity="0" />
    </a>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['position', 'id'],
    computed: {
        x: function () { return this.position.x; },
        y: function () { return this.position.y; },
    },
    methods: {
        clickLink() {
            this.loadItem(this.id);
        },
        ...mapActions(['loadItem'])
    }
}
</script>

<style>

</style>