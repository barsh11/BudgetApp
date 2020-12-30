import React from 'react';
import SummaryItem from './SummaryItem';

export default {
  title: 'Summary/SummaryItem',
};

export const common = () => (
  <SummaryItem amount={0} currency="USD" company="ATL" date="5 march, 18:32" type="cancelled" />
);
