import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../contexts/UserContext';
import SidebarBalance from '../../components/molecules/SidebarBalance/SidebarBalance';
import NavigationList from '../../components/organisms/NavigationList/NavigationList';
import Backdrop from '../../components/atoms/Backdrop/Backdrop';
import { AppContext } from '../../contexts/AppContext';
import convertCurrency from '../../utils/convertCurrency';

type SidebarProps = {
  closed: Function;
};

const SWrapper = styled.div`
  background-color: var(--color-primary);
  border-radius: 2rem 0 0 2rem;
  padding-top: 3.2rem;
  padding-right: 2rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 56.25em) {
    position: fixed;
    top: 0;
    left: 0;
    transition: all 0.3s ease-out;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    width: 23rem;
    max-width: 70%;
    z-index: 300;
    border-radius: 0rem;

    &.open {
      transform: translateX(0);
    }

    &.close {
      transform: translateX(-100%);
    }
  }

  @media (min-width: 56.25em) and (max-width: 56.25em) {
    &.sidebar {
      display: none;
    }
  }
`;

const Sidebar: React.FC<SidebarProps> = ({ closed }) => {
  const app = useContext(AppContext);
  const user = useContext(UserContext);

  const attachedClasses = `sidebar ${app.showSidebar ? 'open' : 'close'}`;

  return (
    <>
      <Backdrop open={app.showSidebar} clicked={closed} />
      <SWrapper className={attachedClasses}>
        <SidebarBalance
          balance={convertCurrency(
            parseFloat(user.currentBalance),
            user.currentBalanceCurrency,
            app.currency,
            app.currencyRates
          )}
          currency={app.currency}
        />
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
    </>
  );
};

export default Sidebar;
