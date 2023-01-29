import React from 'react';

import { expenses } from '@/entities/expenses';
import { formatCurrency } from '@/shared/lib/formatters';

import styles from './styles.module.css';

type ExpensesItemProps = {
  actions: React.ReactElement;
  item?: expenses.ExpenseItem
};

export function SimpleExpenseCard(props:ExpensesItemProps) {
  const { item, actions } = props;
  if (!item) return null;

  const actionsInstance = actions ? React.cloneElement(actions, { id: item.id }) : null;
  const currencyAmount = formatCurrency(item.amount);

  return (
    <>
      <div className={styles.tableRow}>{item.expense}</div>
      <div className={styles.tableRow}>{currencyAmount}</div>
      <div className={`${styles.tableRow} ${styles.delete}`}>
        {actionsInstance}
      </div>
    </>
  );
}

SimpleExpenseCard.defaultProps = {
  item: undefined,
};
