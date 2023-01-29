import React from 'react';

import { AddPanelWidget, ExpensesPanelWidget, SummaryPanelWidget } from '@/widgets';

import styles from './styles.module.css';

export function MainPage() {
  return (
    <div className={styles.wrapper}>
      <AddPanelWidget />
      <ExpensesPanelWidget />
      <SummaryPanelWidget />
    </div>
  );
}
