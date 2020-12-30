import React from 'react';
import TransactionsInfo from './TransactionsInfo';

export default {
  title: 'Transactions/TransactionsInfo',
};

export const common = () => <TransactionsInfo type="expense" amount={4644} currency="USD" isRefund />;
