import React from 'react';
import BalanceLabel from './BalanceLabel';

export default {
  title: 'Sidebar/BalanceLabel',
};

export const common = () => <BalanceLabel balance={25650} currency="USD" />;
