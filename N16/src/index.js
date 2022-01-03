import Vue from "vue";
import StarRating from "./StarRating.js";

const starRating = new Vue({
    el: '.wrapper',
    render: (h) => h(StarRating)
});
