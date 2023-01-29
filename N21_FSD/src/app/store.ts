import { configureStore } from '@reduxjs/toolkit';
import { expenses } from '@/entities/expenses';
import { income } from '@/entities/income';

const reducer = {
  expenses: expenses.reducer,
  income: income.reducer,
};

const store = configureStore({
  reducer,
  devTools: !import.meta.env.PROD,
});

export default store;
