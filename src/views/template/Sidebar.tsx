import React from 'react';
import styled from 'styled-components';
import SidebarBalance, { SidebarBalanceProps } from '../../components/molecules/SidebarBalance/SidebarBalance';
import NavigationList, { NavigationListProps } from '../../components/organisms/NavigationList/NavigationList';

export type SidebarProps = SidebarBalanceProps & NavigationListProps;

const SWrapper = styled.div`
  background-color: var(--color-primary);
  border-radius: 2rem 0 0 2rem;
  padding-right: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 68.2rem;
`;

const Sidebar: React.FC<SidebarProps> = (props) => {
  // distructure
  const { balance, currency, navList } = props;

  return (
    <SWrapper>
      <SidebarBalance balance={balance} currency={currency} />
      <NavigationList navList={navList} />
    </SWrapper>
  );
};

export default Sidebar;
