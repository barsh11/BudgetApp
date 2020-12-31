import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../contexts/UserContext';
import SidebarBalance from '../../components/molecules/SidebarBalance/SidebarBalance';
import NavigationList from '../../components/organisms/NavigationList/NavigationList';

const SWrapper = styled.div`
  background-color: var(--color-primary);
  border-radius: 2rem 0 0 2rem;
  padding-right: 2rem;
  padding-top: 3.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 68.2rem;
`;

const Sidebar: React.FC = () => {
  const balance = parseFloat(useContext(UserContext).currentBalance);
  const currency = useContext(UserContext).currentBalanceCurrency;

  return (
    <SWrapper>
      <SidebarBalance balance={balance} currency={currency} />
      <NavigationList
        navList={[
          { label: 'dashboard' },
          { label: 'transactions' },
          { label: 'categories' },
          { label: 'charts' },
          { label: 'user profile' },
        ]}
      />
    </SWrapper>
  );
};

export default Sidebar;
