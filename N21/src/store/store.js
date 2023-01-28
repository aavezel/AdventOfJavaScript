import {v4 as uuid} from 'uuid';

const store = {
    income: 0,
    expenses: [],
    amount: 0
}

const saveStore = () => {
    localStorage.setItem('n21_store', JSON.stringify(store));
}

const restoreStore = () => {
    const data = localStorage.getItem('n21_store') || '{}';
    const newStore = JSON.parse(data);

    store.income = newStore.income ?? 0;
    store.expenses = newStore.expenses ?? [];
    store.amount = store.expenses.reduce((s, item) => s + item.amount, 0);

    document.body.dispatchEvent(new CustomEvent("income.changed", {detail: store.income}));
    document.body.dispatchEvent(new CustomEvent("expenses.changed", {detail: store.expenses}));
    document.body.dispatchEvent(new CustomEvent("amount.changed", {detail: store.amount}));
    document.body.dispatchEvent(new CustomEvent("balance.changed", {detail: store.income - store.amount}));
}

const changeIncome = (changeIncome) => {
    store.income = changeIncome;
    document.body.dispatchEvent(new CustomEvent("income.changed", {detail: store.income}));
    document.body.dispatchEvent(new CustomEvent("balance.changed", {detail: store.income - store.amount}));

    saveStore();
}

const updateExpenses = (expenses) => {
    store.expenses = expenses;
    store.amount = expenses.reduce((s, item) => s + item.amount, 0);

    document.body.dispatchEvent(new CustomEvent("expenses.changed", {detail: store.expenses}));
    document.body.dispatchEvent(new CustomEvent("amount.changed", {detail: store.amount}));
    document.body.dispatchEvent(new CustomEvent("balance.changed", {detail: store.income - store.amount}));

    saveStore();
}

const initStore = () => {
    document.body.addEventListener('change.income',(e) => {
        changeIncome(Number.parseFloat(e.detail));
    });
    document.body.addEventListener('expenses.add',(e) => {
        const id = uuid();
        updateExpenses([...store.expenses, {id, ...e.detail}]);
    });
    document.body.addEventListener('expenses.remove',({detail}) => {
        const newExpenses = store.expenses.filter(item => item.id !== detail);
        updateExpenses(newExpenses);
    });

    restoreStore();
}

export default initStore;