import React from 'react';
import SummaryItem from './SummaryItem';

export default {
  title: 'Summary/SummaryItem',
};

export const common = () => (
  <SummaryItem
    isCancelled={false}
    amount={-2200}
    currency="USD"
    company="Paypal"
    date="4 march, 14:30"
    type="expense"
  />
);
