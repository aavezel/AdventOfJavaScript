import React, { ChangeEvent } from 'react';
import styles from './styles.module.css';

type Props = {
  name: string;
  label: string;
  value: string;
  onChange: (newValue: string) => void;
};

export function Field(props: Props) {
  const {
    name, label, value, onChange,
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.field}>
      <input type="text" name={name} onChange={handleChange} className={styles.input} value={value} />
      <label className={styles.label} htmlFor={name}>{label}</label>
    </div>
  );
}
