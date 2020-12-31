import React from 'react';
import styled from 'styled-components';
import SidebarNavItem, { SidebarNavItemProps } from '../../molecules/SidebarNavItem/SidebarNavItem';

export type NavigationListProps = {
  navList: SidebarNavItemProps[];
};

const SUl = styled.ul`
  align-self: flex-start;
  margin-left: 2.5rem;
  margin-top: 2rem;

  list-style: none;
`;

const SLi = styled.li`
  &:not(:last-child) {
    margin-bottom: 1.4rem;
  }
`;

const Sa = styled.a`
  text-decoration: none;

  &:hover,
  &:active {
    cursor: pointer;
  }
`;

const renderNavItem = (curr: SidebarNavItemProps) => (
  <SLi key={curr.label}>
    <Sa href={`/${curr.label}`}>
      <SidebarNavItem label={curr.label} />
    </Sa>
  </SLi>
);

const NavigationList: React.FC<NavigationListProps> = ({ navList }) => (
  <SUl>{navList.map((el) => renderNavItem(el))}</SUl>
);

export default NavigationList;
