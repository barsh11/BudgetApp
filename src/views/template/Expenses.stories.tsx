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
      {
        time: '12:22',
        date: '15 Jun 2016',
        company: 'bread crumbs',
        amount: 109.3,
        currency: 'USD',
        isRefund: false,
        link: 'https://www.google.com',
      },
      {
        time: '14:22',
        date: '13 Jun 2016',
        company: 'netflix',
        amount: 30,
        currency: 'USD',
        isRefund: false,
        link: 'https://www.google.com',
      },
      {
        time: '11:22',
        date: '10 Jun 2016',
        company: 'tamara',
        amount: 10.01,
        currency: 'USD',
        isRefund: true,
        link: 'https://www.google.com',
      },
      {
        time: '10:23',
        date: '10 Jun 2016',
        company: 'toysRus',
        amount: 10,
        currency: 'USD',
        isRefund: false,
        link: 'https://www.google.com',
      },
    ]}
  />
);
