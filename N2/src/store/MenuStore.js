import { makeAutoObservable } from 'mobx';
import menu from './Init';

const TENNESSEE_SALES_TAX = 0.0975;

class MenuStore {
    constructor() {
        this.list = menu.map((item) => ({ ...item, count: 0 }));
        makeAutoObservable(this);
    }

    get cartItems() {
        return this.list.filter(({ count }) => count > 0);
    }

    get totals() {
        const subtotal = this.cartItems.reduce(
            (acc, { count, price }) => acc + count * price,
            0,
        );
        const tax = Math.ceil(TENNESSEE_SALES_TAX * subtotal);
        const total = subtotal + tax;
        return { subtotal, tax, total };
    }

    findItem(name) {
        return this.list.find((item) => item.name === name);
    }

    increaseCount(name) {
        const item = this.findItem(name);
        item.count++;
    }

    decreaseCount(name) {
        const item = this.findItem(name);
        item.count--;
    }

    removeFromCart(name) {
        const item = this.findItem(name);
        item.count = 0;
    }
}

export default new MenuStore();
