import React from 'react';

import { AddExpense } from '@/features/add-expense';
import { ChangeBudgetAmount } from '@/features/change-budget-amount';

import styles from './styles.module.css';

export function AddPanelWidget() {
  return (
    <div className={styles.addPanel}>
      <h1 className={styles.header}>Simplified Budget</h1>
      <ChangeBudgetAmount />
      <AddExpense />
    </div>
  );
}
