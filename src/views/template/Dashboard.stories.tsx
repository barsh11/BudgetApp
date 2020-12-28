import React from 'react';
import Dashboard from './Dashboard';

export default {
  title: 'Dashboard/Dashboard',
};

export const common = () => (
  <Dashboard
    cardsList={[
      { cardNumber: 4111111111111111, cardDate: '04/21', cardName: 'Ian Kelley' },
      { cardNumber: 4111111111187345, cardDate: '04/25', cardName: 'Dan Kelley' },
    ]}
  />
);
