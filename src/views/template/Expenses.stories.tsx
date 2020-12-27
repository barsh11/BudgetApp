import React from 'react';
import Expenses from './Expenses';

export default {
  title: 'Expenses/Expenses',
};

export const common = () => (
  <Expenses
    expList={[
      {
        time: '15:12',
        date: '13 Aug 2016',
        company: 'amazon',
        amount: 4500,
        currency: 'USD',
        isRefund: true,
        link: 'https://www.google.com',
      },
      {
        time: '15:33',
        date: '15 Aug 2016',
        company: 'burger king',
        amount: 400,
        currency: 'USD',
        isRefund: false,
        link: 'https://www.google.com',
      },
    ]}
  />
);
