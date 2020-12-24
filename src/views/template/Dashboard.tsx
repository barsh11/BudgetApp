import React from 'react';
import styled from 'styled-components';
import CreditCard from '../../components/molecules/CreditCard/CreditCard';

type DashboardProps = {
  data: { cardNumber: number; cardName: string; cardDate: string };
};

const SWrapper = styled.div`
  background-color: var(--color-white);
  border-radius: 2rem 0 0 2rem;
  margin-left: -2rem;
  padding: 3.2rem;

  height: 68.2rem;
`;

const Dashboard: React.FC<DashboardProps> = ({ data }) => (
  <SWrapper>
    <CreditCard data={data} />
  </SWrapper>
);

export default Dashboard;
