<template>
    <img :src="imageSrc" :alt="altType" :class="className"/>
</template>

<script>
import paper from "../images/paper.png";
import rock from "../images/rock.png";
import scissors from "../images/scissors.png";

const images = {
    paper,
    rock,
    scissors,
};

export default {
    props: {
        type: {
            type: String,
            required: true,
        },
        small: {
            type: Boolean,
            default: false,
        }
    },
    setup({ type, small }, { emit }) {
        const imageSrc = images[type];
        const altType = type[0].toUpperCase() + type.substr(1);
        const className = {
            small
        }

        return {
            altType,
            className,
            imageSrc,
        };
    },
};
</script>

<style scoped>
    .small {
        max-height: 250px;
        max-width: 250px;
    }
</style>
