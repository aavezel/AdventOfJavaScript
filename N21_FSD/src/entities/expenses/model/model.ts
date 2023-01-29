import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export type ExpenseItem = {
  id: string,
  expense: string,
  amount: number
};

export type SliceState = {
  items: Array<ExpenseItem>
};

const initialState: SliceState = {
  items: [],
};

const slice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    add(state: SliceState, { payload }: PayloadAction<Omit<ExpenseItem, 'id'>>) {
      const newItem: ExpenseItem = {
        ...payload,
        id: uuid(),
      };
      state.items.push(newItem);
    },
    remove(state: SliceState, { payload }: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== payload);
    },
  },
});

export const { add, remove } = slice.actions;

export const { reducer } = slice;

type AppShapeState = {
  expenses: SliceState
};

export const selectExpenses = ({ expenses }: AppShapeState) => expenses.items;

export const selectExpensesAmount = createSelector(
  selectExpenses,
  (items) => items.reduce((acc, item) => acc + item.amount, 0),
);
