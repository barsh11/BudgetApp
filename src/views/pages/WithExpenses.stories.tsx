import React from 'react';
import WithExpenses from './WithExpenses';

export default {
  title: 'AcrossApp/WithExpenses',
};

// pleasse provide mock file with all dummy data and import it everywhere you need

export const common = () => (
  <WithExpenses
    expensesData={{
      expList: [
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
      ],
    }}
    summaryData={{
      imgSrc:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      userName: 'Ian Kelley',
      userEmail: 'ian_kelley@gmail.com',
      summaryList: [
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
          amount: 0,
          currency: 'USD',
          company: 'amazon',
          date: '5 march, 18:23',
          type: 'cancel',
        },
      ],
    }}
    sidebarData={{
      currency: 'USD',
      balance: 25650,
      navList: [{ label: 'dashboard' }, { label: 'cards' }, { label: 'expenses' }, { label: 'incomes' }],
    }}
  />
);
