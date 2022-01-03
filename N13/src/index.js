import Vue from "vue";
import App from "./components/App.vue";
import store from "./store";

const app = new Vue({
    el: ".wrapper",
    store,
    render: function(createElement) {
        return createElement(App)
    }
});
