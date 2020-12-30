import React from 'react';
import WithExpenses from './WithExpenses';

export default {
  title: 'AcrossApp/WithExpenses',
};

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
          isRefund: false,
          link: 'https://www.google.com',
        },
        {
          time: '10:23',
          date: '10 Jun 2016',
          company: 'toys',
          amount: 10,
          currency: 'USD',
          isRefund: true,
          link: 'https://www.google.com',
        },
        {
          time: '10:00',
          date: '10 Jun 2016',
          company: 'mei avivim',
          amount: 100,
          currency: 'USD',
          isRefund: false,
          link: 'https://www.google.com',
        },
        {
          time: '13:40',
          date: '3 May 2016',
          company: 'shufersal',
          amount: 2930,
          currency: 'USD',
          isRefund: false,
          link: 'https://www.google.com',
        },
        {
          time: '23:22',
          date: '2 May 2016',
          company: 'asos',
          amount: 2998,
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
    }}
    sidebarData={{
      currency: 'USD',
      balance: 25650,
      navList: [{ label: 'dashboard' }, { label: 'cards' }, { label: 'expenses' }, { label: 'incomes' }],
    }}
  />
);
