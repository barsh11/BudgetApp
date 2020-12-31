import React from 'react';
import WithTransactions from './WithTransactions';

export default {
  title: 'AcrossApp/WithTransactions',
};

export const common = () => (
  <WithTransactions
    summaryData={{
      imgSrc:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      userName: 'Ian Kelley',
      userEmail: 'ian_kelley@gmail.com',
    }}
    sidebarData={{
      currency: 'USD',
      balance: 25650,
      navList: [
        { label: 'dashboard' },
        { label: 'transactions' },
        { label: 'categories' },
        { label: 'charts' },
        { label: 'user profile' },
      ],
    }}
  />
);
