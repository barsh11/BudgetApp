import React from 'react';
import Sidebar from './Sidebar';

export default {
  title: 'Sidebar/Sidebar',
};

export const common = () => (
  <Sidebar
    currency="USD"
    balance={25650}
    navList={[
      { label: 'dashboard' },
      { label: 'transactions' },
      { label: 'categories' },
      { label: 'charts' },
      { label: 'user profile' },
    ]}
  />
);
