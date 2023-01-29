import React from 'react';
import { useSelector } from 'react-redux';

import { expenses } from '@/entities/expenses';

type ExpenseListProps = {
  card: React.ReactElement;
};

export function ExpenseList({ card }: ExpenseListProps) {
  const items = useSelector(expenses.selectExpenses);
  return <>{items.map((item) => React.cloneElement(card, { item, key: item.id }))}</>;
}
