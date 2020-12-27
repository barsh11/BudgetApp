import React from 'react';
import styled from 'styled-components';
import SidebarNavItem, { SidebarNavItemProps } from '../../molecules/SidebarNavItem/SidebarNavItem';

export type NavigationListProps = {
  navList: SidebarNavItemProps[];
};

const SUl = styled.ul`
  align-self: flex-start;
  margin-left: 2rem;

  list-style: none;
`;

const SLi = styled.li`
  &:not(:last-child) {
    margin-bottom: 1.4rem;
  }
`;

const Sa = styled.a`
  &:hover,
  &:active {
    cursor: pointer;
  }
`;

const renderNavItem = (label: 'cards' | 'dashboard' | 'expenses' | 'incomes') => (
  <SLi>
    <Sa>
      <SidebarNavItem key={label} label={label} />
    </Sa>
  </SLi>
);

const NavigationList: React.FC<NavigationListProps> = ({ navList }) => (
  <SUl>{navList.map((el) => renderNavItem(el.label))}</SUl>
);

export default NavigationList;
