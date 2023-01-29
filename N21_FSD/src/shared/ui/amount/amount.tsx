import React from 'react';

import { formatCurrency } from '@/shared/lib/formatters';

import styles from './styles.module.css';

type Props = {
  label: string;
  value: number;
  showSign?: boolean;
};

export function Amount(props: Props) {
  const { value, label, showSign = false } = props;
  let amountClassNames = styles.amount;
  if (showSign) {
    const signClass = value >= 0 ? styles.amountPositive : styles.amountNegative;
    amountClassNames = `${styles.amount} ${signClass}`;
  }
  const currencyValue = formatCurrency(value);

  return (
    <div className={styles.item}>
      <div className={styles.label}>{label}</div>
      <div className={amountClassNames}>{currencyValue}</div>
    </div>
  );
}

Amount.defaultProps = {
  showSign: false,
};
