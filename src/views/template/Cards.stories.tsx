import React from 'react';
import Cards from './Cards';

export default {
  title: 'Cards/Cards',
};

export const common = () => (
  <Cards
    cardsList={[
      { cardNumber: 4111111111111111, cardDate: '04/21', cardName: 'Ian Kelley' },
      { cardNumber: 4111111111187345, cardDate: '04/25', cardName: 'Dan Kelley' },
    ]}
  />
);
