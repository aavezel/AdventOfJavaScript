import Vue from "vue";
import Vuex from 'vuex';
import {getItems, getItem} from './data';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        items: [],
        currentItem: null
    },
    mutations: {
        setItems(state, items) {
            state.items = items;
        },
        setCurrentItem(state, currentItem) {
            state.currentItem = currentItem;
        },
        clearCurrentItem(state) {
            state.currentItem = null;
        }
    },
    actions: {
        async loadItems(context) {
            const items = await getItems();
            context.commit('setItems', items)
        },
        async loadItem(context, id) {
            const item = await getItem(id);
            context.commit('setCurrentItem', item)
        },
    }

});

export default store;