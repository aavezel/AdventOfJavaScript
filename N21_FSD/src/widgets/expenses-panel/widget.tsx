import React from 'react';

import { ExpenseList, SimpleExpenseCard } from '@/entities/expenses';
import { RemoveExpense } from '@/features/remove-expense';

import styles from './styles.module.css';

export function ExpensesPanelWidget() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Expenses</h2>
      <div className={styles.table}>
        <ExpenseList
          card={
            <SimpleExpenseCard actions={<RemoveExpense />} />
          }
        />
      </div>
    </div>
  );
}
