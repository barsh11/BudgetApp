import React from 'react';
import styled from 'styled-components';
import SidebarBalance from '../../components/molecules/SidebarBalance/SidebarBalance';
import NavigationList from '../../components/organisms/NavigationList/NavigationList';

type SidebarProps = {
  balance: number;
  currency: string;
  labels: ('cards' | 'dashboard' | 'expenses' | 'incomes')[];
};

const SWrapper = styled.div`
  background-color: var(--color-primary);
  border-radius: 2rem 0 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16.8rem;
  height: 68.2rem;
`;

const Sidebar: React.FC<SidebarProps> = ({ balance, currency, labels }) => (
  <SWrapper>
    <SidebarBalance balance={balance} currency={currency} />
    <NavigationList data={labels} />
  </SWrapper>
);

export default Sidebar;
