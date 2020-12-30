import React from 'react';
import TransactionsAmount from './TransactionsAmount';

export default {
  title: 'Transactions/TransactionsAmount',
};

export const common = () => <TransactionsAmount amount={25650} currency="USD" isRefund />;
