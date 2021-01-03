import React from 'react';
import styled from 'styled-components';
import CreditCard from '../../../components/molecules/CreditCard/CreditCard';

const SWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.5rem;
  justify-items: center;
`;

const Dashboard: React.FC = () => (
  <SWrapper>
    <CreditCard last4={4115} cardDate="04/21" cardName="Ian Kelley" />
  </SWrapper>
);

export default Dashboard;
