<template>
    <round @set-winner="setWinner" v-if="showRound" />
    <winner :value="state" @clear-winner="clearWinner" v-else />
</template>

<script>
import { ref, computed } from "vue";
import Round from "./Round.vue";
import Winner from "./Winner.vue";

export default {
    components: { Round, Winner },
    setup() {
        const state = ref(null);
        const setWinner = (value) => {
            state.value = value;
        };
        const clearWinner = () => (state.value = null);
        const showRound = computed(() => state.value === null);

        return {
            state,
            showRound,
            clearWinner,
            setWinner,
        };
    },
};
</script>

<style scoped></style>
