import React from 'react';
import WithCards from './WithCards';

export default {
  title: 'AcrossApp/WithCards',
};

export const common = () => (
  <WithCards
    cardsData={{
      cardsList: [
        { cardNumber: 4111111111111111, cardDate: '04/21', cardName: 'Ian Kelley' },
        { cardNumber: 4111111111187345, cardDate: '03/25', cardName: 'Dan Kelley' },
        { cardNumber: 4111111111182245, cardDate: '04/23', cardName: 'Jan Kelley' },
        { cardNumber: 4111111111187312, cardDate: '02/25', cardName: 'Man Kelley' },
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
      navList: [
        { label: 'dashboard' },
        { label: 'cards' },
        { label: 'transactions' },
        { label: 'charts' },
        { label: 'user profile' },
      ],
    }}
  />
);
