import React from 'react';
import WithDashboard from './WithDashboard';

export default {
  title: 'AcrossApp/WithDashboard',
};

export const common = () => (
  <WithDashboard
    data={{
      sidebarData: {
        currency: 'USD',
        balance: 25650,
        labels: ['dashboard', 'cards', 'expenses', 'incomes'],
      },
      dashboardData: {
        cardNumber: 4111111111111111,
        cardDate: '04/21',
        cardName: 'Ian Kelley',
      },
      summaryData: {
        data: [
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
        ],
        imgSrc:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
        userName: 'Ian Kelley',
        userEmail: 'ian_kelley@gmail.com',
      },
    }}
  />
);