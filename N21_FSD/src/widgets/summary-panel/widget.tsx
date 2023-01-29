import React from 'react';
import { useSelector } from 'react-redux';

import { Amount } from '@/shared/ui';
import { expenses } from '@/entities/expenses';
import { income } from '@/entities/income';

import styles from './styles.module.css';

export function SummaryPanelWidget() {
  const value = useSelector(income.selectIncome);
  const expensesAmount = useSelector(expenses.selectExpensesAmount);
  const balance = value - expensesAmount;

  return (
    <div className={styles.container}>
      <Amount label="Income" value={value} />
      <Amount label="Expenses" value={expensesAmount} />
      <Amount label="Balance" value={balance} showSign />
    </div>
  );
}
