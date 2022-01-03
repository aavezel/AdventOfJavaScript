<template>
    <div :class="className">
        <div class="wrapper">
            <div class="your-pick">
                <h1 class="you-win">you win</h1>
                <hand-picture :type="yourChoice"/>
            </div>
            <div class="computer-pick">
                <h1 class="computer-wins">computer wins</h1>
                <hand-picture :type="computerChoice"/>
            </div>
            <button class="play-again" @click="again">play again?</button>
        </div>
    </div>
</template>

<script>
import HandPicture from "./HandPicture.vue";

export default {
    components: { HandPicture },
    emits: ["clearWinner"],
    props: ["value"],
    setup({ value }, { emit }) {
        const { win, yourChoice, computerChoice } = value;
        const className = {
            winner: true,
            "you-win": win,
            "computer-wins": !win,
        };
        const again = () => emit("clearWinner");

        return {
            again,
            className,
            computerChoice,
            yourChoice,
        };
    },
};
</script>

<style scoped>
.winner {
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.winner.you-win {
    background: url("../images/you-win.svg") left top no-repeat;
    background-size: auto 100%;
}
.winner.computer-wins {
    background: url("../images/computer-wins.svg") right top no-repeat;
    background-size: auto 100%;
}

.computer-wins h1.you-win,
.you-win h1.computer-wins {
    visibility: hidden;
}

.wrapper {
    display: flex;
    gap: 200px;
    position: relative;
}

img {
    mix-blend-mode: multiply;
}

.computer-pick img {
    transform: scaleX(-1);
}

.play-again {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    font-family: "Roboto Mono", monospace;
    font-size: 2rem;
    border: 2px solid black;
    background: none;
    padding: 15px 85px;
    cursor: pointer;
}

.play-again:hover {
    background: black;
    color: white;
}
</style>
