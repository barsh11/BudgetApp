import React from 'react';
import SummaryItem from './SummaryItem';

export default {
  title: 'Summary/SummaryItem',
};

export const common = () => (
  <SummaryItem isCancelled={false} amount={-1470} currency="USD" company="ATL" date="5 march, 18:33" type="expense" />
);
