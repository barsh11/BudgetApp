import React from 'react';
import NavigationList from './NavigationList';

export default {
  title: 'Sidebar/NavigationList',
};

export const common = () => (
  <NavigationList navList={[{ label: 'dashboard' }, { label: 'cards' }, { label: 'expenses' }, { label: 'incomes' }]} />
);
