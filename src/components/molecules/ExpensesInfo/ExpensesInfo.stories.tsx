import React from 'react';
import ExpensesInfo from './ExpensesInfo';

export default {
  title: 'Expenses/ExpensesInfo',
};

export const common = () => (
  <ExpensesInfo data={{ link: 'https://www.google.com', amount: 4644, currency: 'USD', isRefund: true }} />
);