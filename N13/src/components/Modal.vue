<template>
    <div class="overlay">
      <div class="modal">
        <button class="close">
          <img src="images/close.svg" alt="Close" @click="clearCurrentItem" />
        </button>

        <div class="content">
          <h1>{{currentItem.name}}</h1>
          <div class="description">
            <p v-for="(p, idx) in currentItem.text" :key="idx">
              {{p}}
            </p>
          </div>
          <a :href="currentItem.buyLink" class="buy-now" target="_blank">
            BUY NOW for ${{currentItem.price}}
          </a>
        </div>

        <div class="product-image">
          <img :src="image" :alt="currentItem.name" />
        </div>

      </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    computed: {
      image() {
        return `images/${this.currentItem.image}`
      },
      ...mapState(['currentItem'])
    },
    methods: {
        ...mapMutations(['clearCurrentItem'])
    }
}
</script>

<style>

</style>