import { readable, writable } from 'svelte/store';
import {getItems, getItem} from './api'

function currentItemStore() {
    const { subscribe, set } = writable(null);
    return {
        subscribe,
        setItemId: async (id: string) => {
            const data = await getItem(id);
            set(data);
        }
    };
};

export const currentItem = currentItemStore();


export const items = readable([], async (set) => {
    const items = await getItems();
    set(items)
    if (items.length > 0) {
        currentItem.setItemId(items[0].id);
    }
});
