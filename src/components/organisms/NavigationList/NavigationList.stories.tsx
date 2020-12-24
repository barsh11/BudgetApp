import React from 'react';
import NavigationList from './NavigationList';

export default {
  title: 'Sidebar/NavigationList',
};

export const common = () => <NavigationList data={['dashboard', 'cards', 'expenses', 'incomes']} />;
