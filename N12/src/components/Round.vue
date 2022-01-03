<template>
    <h1>pick one</h1>
    <ul>
        <pick-one v-for="type in types" @choice="choiceEvent" :type="type" :key="type" />
    </ul>
</template>

<script>
import PickOne from "./PickOne.vue";

const types = ["rock", "paper", "scissors"];
const rulesWin = {
    rock: "paper",
    paper: "scissors",
    scissors: "rock",
};

export default {
    emits: ['setWinner'],
    components: { PickOne },
    setup(_, { emit }) {
        const choiceEvent = (choice) => {
            let computerChoice = choice;

            while (choice === computerChoice) {
                const computerChoiceIdx = Math.floor(Math.random() * types.length);
                computerChoice = types[computerChoiceIdx];
            }

            emit("setWinner", {
                win: rulesWin[choice] !== computerChoice,
                yourChoice: choice,
                computerChoice
            });
        };

        return {
            types,
            choiceEvent,
        };
    },
};
</script>

<style scoped>
h1 {
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 75px;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 75px;
}
</style>
