import React from 'react';
import SummaryList from './SummaryList';

export default {
  title: 'Summary/SummaryList',
};

export const common = () => (
  <SummaryList
    data={[
      {
        isCancelled: false,
        amount: -1470,
        currency: 'USD',
        company: 'ATL',
        date: '5 march, 18:33',
        type: 'expense',
      },
      {
        isCancelled: false,
        amount: -1470,
        currency: 'USD',
        company: 'ATL',
        date: '5 march, 18:23',
        type: 'expense',
      },
    ]}
  />
);
