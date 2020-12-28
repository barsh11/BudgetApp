import React from 'react';
import styled from 'styled-components';
import CreditCard, { CreditCardProps } from '../../components/molecules/CreditCard/CreditCard';

export type DashboardProps = CreditCardProps;

const SWrapper = styled.div`
  background-color: var(--color-white-dark);
  border-radius: 2rem 0 0 2rem;
  margin-left: -2rem;
  padding: 3.2rem;

  height: 68.2rem;
`;

const Dashboard: React.FC<DashboardProps> = ({ cardDate, cardNumber, cardName }) => (
  <SWrapper>
    <CreditCard cardDate={cardDate} cardName={cardName} cardNumber={cardNumber} />
  </SWrapper>
);

export default Dashboard;
