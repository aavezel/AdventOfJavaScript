import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SliceState = {
  value: number
};

const initialState: SliceState = {
  value: 0,
};

const slice = createSlice({
  name: 'income',
  initialState,
  reducers: {
    update(state: SliceState, { payload }: PayloadAction<number>) {
      state.value = payload;
    },
  },
});

export const { update } = slice.actions;

export const { reducer } = slice;

type AppShapeState = {
  income: SliceState
};

export const selectIncome = ({ income }: AppShapeState) => income.value;
