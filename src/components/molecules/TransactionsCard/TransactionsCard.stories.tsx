import React from 'react';
import TransactionsCard from './TransactionsCard';

export default {
  title: 'Transactions/TransactionsCard',
};

export const common = () => (
  <TransactionsCard
    time="15:12"
    date="13 Aug 2016"
    company="amazon"
    amount={4500}
    currency="USD"
    isRefund
    type="expense"
    id="bb"
  />
);
