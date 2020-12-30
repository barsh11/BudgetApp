import React from 'react';
import WithExpenses from './WithExpenses';

export default {
  title: 'AcrossApp/WithExpenses',
};

export const common = () => (
  <WithExpenses
    summaryData={{
      imgSrc:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      userName: 'Ian Kelley',
      userEmail: 'ian_kelley@gmail.com',
    }}
    sidebarData={{
      currency: 'USD',
      balance: 25650,
      navList: [{ label: 'dashboard' }, { label: 'cards' }, { label: 'transactions' }],
    }}
  />
);
