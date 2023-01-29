import React from 'react';
import { useDispatch } from 'react-redux';

import { expenses } from '@/entities/expenses';

import trash from './images/trash.svg';
import styles from './styles.module.css';

type RemoveExpenseProps = {
  id?: string;
};

export function RemoveExpense(props: RemoveExpenseProps) {
  const { id } = props;
  const dispatch = useDispatch();

  if (!id) return null;

  const deleteExpense = () => {
    dispatch(expenses.remove(id));
  };

  return (
    <button type="button" className={styles.deleteExpense} onClick={deleteExpense}>
      <img src={trash} alt="Tash" />
    </button>
  );
}

RemoveExpense.defaultProps = {
  id: undefined,
};
