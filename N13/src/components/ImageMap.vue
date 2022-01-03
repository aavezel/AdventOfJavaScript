<template>
    <svg viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <image href="images/bg.jpg" width="1440" height="1024" />
      <ImageItem v-for="item in items" :key="item.id" :id="item.id" :position="item.position" />
    </svg>
</template>
<script>
  import ImageItem from './ImageItem.vue';
  import { mapActions, mapState } from 'vuex'

  export default {
    components: {ImageItem},
    computed: {
      ...mapState(['items'])
    },
    mounted: function() {
        this.loadItems();
    },
    methods: {
      clickLink(){
        this.$emit('showMessage')
      },
      ...mapActions(['loadItems'])
    }
  }
</script>
