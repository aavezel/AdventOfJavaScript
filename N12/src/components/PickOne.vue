<template>
    <li class="pick-one">
        <button @click="click">
            <hand-picture :type="type" small />
            {{ type }}
        </button>
    </li>
</template>

<script>
import HandPicture from './HandPicture.vue';

export default {
    components: {HandPicture},
    emits: ["choice"],
    props: {
        type: {
            type: String,
            required: true,
        },
    },
    setup({ type }, { emit }) {
        const click = () => emit("choice", type);

        return {
            click,
            type,
        };
    },
};
</script>

<style scoped>
li.pick-one {
    display: flex;
    text-align: center;
}

li.pick-one button {
    background: none;
    border: 2px solid black;
    font-family: "Roboto Mono", monospace;
    cursor: pointer;
    height: 355px;
    width: 325px;
    font-size: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

li.pick-one button:hover {
    border: 10px solid #ffb800;
}

</style>
