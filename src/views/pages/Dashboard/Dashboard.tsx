import React from 'react';
import CreditCard from '../../../components/molecules/CreditCard/CreditCard';
import SWrapper from '../MainStyle';

const Dashboard: React.FC = () => (
  <SWrapper>
    <CreditCard last4={4115} cardDate="04/21" cardName="Ian Kelley" />
  </SWrapper>
);

export default Dashboard;
