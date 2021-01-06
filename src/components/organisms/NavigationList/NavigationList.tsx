import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SidebarNavItem, { SidebarNavItemProps } from '../../molecules/SidebarNavItem/SidebarNavItem';
import slugify from '../../../utils/slugify';

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
    margin-bottom: 1.6rem;
  }
`;

const SLink = styled(Link)`
  text-decoration: none;

  &:hover,
  &:active {
    cursor: pointer;
  }
`;

const NavigationList: React.FC<NavigationListProps> = ({ navList }) => {
  const renderNavItem = (curr: SidebarNavItemProps) => (
    <SLi key={curr.label}>
      <SLink to={`/${slugify(curr.label)}`}>
        <SidebarNavItem label={curr.label} />
      </SLink>
    </SLi>
  );

  return <SUl>{navList.map((el) => renderNavItem(el))}</SUl>;
};

export default NavigationList;
