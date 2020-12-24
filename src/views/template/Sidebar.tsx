import React from 'react';
import styled from 'styled-components';
import SidebarBalance from '../../components/molecules/SidebarBalance/SidebarBalance';
import NavigationList from '../../components/organisms/NavigationList/NavigationList';

type SidebarProps = {
  data: { balance: number; currency: string; labels: ('cards' | 'dashboard' | 'expenses' | 'incomes')[] };
};

const SWrapper = styled.div`
  background-color: var(--color-primary);
  border-radius: 2rem 0 0 2rem;
  padding-right: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 68.2rem;
`;

const Sidebar: React.FC<SidebarProps> = ({ data }) => (
  <SWrapper>
    <SidebarBalance balance={data?.balance} currency={data.currency} />
    <NavigationList data={data.labels} />
  </SWrapper>
);

export default Sidebar;
