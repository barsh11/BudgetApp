import React from 'react';
import DashboardTransactions from './DashboardTransactions';

export default {
  title: 'Dashboard/DashboardTransactions',
};

export const common = () => <DashboardTransactions type="Income" currency="USD" revenue={90524} />;
