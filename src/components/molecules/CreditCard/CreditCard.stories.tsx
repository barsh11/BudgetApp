import React from 'react';
import CreditCard from './CreditCard';

export default {
  title: 'Dashboard/CreditCard',
};

export const common = () => <CreditCard last4={3635} cardDate="04/21" cardName="Ian Kelley" />;
