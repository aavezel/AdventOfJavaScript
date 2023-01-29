import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { expenses } from '@/entities/expenses';
import { Field } from '@/shared/ui';

import plus from './images/plus.svg';
import styles from './styles.module.css';

export function AddExpense() {
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('0');
  const dispatch = useDispatch();

  const addExpense = () => {
    const amountNumber = Number.parseFloat(amount);
    dispatch(expenses.add({ expense, amount: amountNumber }));
  };

  return (
    <div className={styles.addExpense}>
      <Field name="expense-name" label="Expense" onChange={setExpense} value={expense} />
      <Field name="expense-amount" label="Amount" onChange={setAmount} value={amount} />
      <button type="button" className={styles.addExpenseButton} onClick={addExpense}>
        <img src={plus} alt="Plus" />
      </button>
    </div>
  );
}
