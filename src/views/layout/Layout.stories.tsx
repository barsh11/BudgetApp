import React from 'react';
import Layout from './Layout';

export default {
  title: 'AcrossApp/Layout',
};

export const common = () => (
  <Layout
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
