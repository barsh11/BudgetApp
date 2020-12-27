import React from 'react';
import ExpensesCard from './ExpensesCard';

export default {
  title: 'Expenses/ExpensesCard',
};

export const common = () => (
  <ExpensesCard
    time="15:12"
    date="13 Aug 2016"
    company="amazon"
    amount={4500}
    currency="USD"
    isRefund
    link="https://www.google.com"
  />
);
