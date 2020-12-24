import React from 'react';
import CreditCard from './CreditCard';

export default {
  title: 'Dashboard/CreditCard',
};

export const common = () => (
  <CreditCard data={{ cardNumber: 4111111111111111, cardDate: '04/21', cardName: 'Ian Kelley' }} />
);
