import React from 'react';
import ExpensesAmount from './ExpensesAmount';

export default {
  title: 'Expenses/ExpensesAmount',
};

export const common = () => <ExpensesAmount amount={25650} currency="USD" isRefund />;
