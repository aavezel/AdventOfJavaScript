import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field } from '@/shared/ui';
import { income } from '@/entities/income';

export function ChangeBudgetAmount() {
  const value = useSelector(income.selectIncome);
  const dispatch = useDispatch();
  const changeBudgetAmount = useCallback((newValue: string) => {
    const numberNewValue = Number.parseFloat(newValue) || 0;
    dispatch(income.update(numberNewValue));
  }, [dispatch]);

  return (
    <Field name="income" label="Budget Amount" onChange={changeBudgetAmount} value={value.toString()} />
  );
}
