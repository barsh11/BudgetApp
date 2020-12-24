import React from 'react';
import styled from 'styled-components';
import SidebarNavItem from '../../molecules/SidebarNavItem/SidebarNavItem';

type NavigationListProps = {
  data: ('cards' | 'dashboard' | 'expenses' | 'incomes')[];
};

const SUl = styled.ul`
  list-style: none;
`;

const SLi = styled.li`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Sa = styled.a`
  &:hover,
  &:active {
    cursor: pointer;
  }
`;

const NavigationList: React.FC<NavigationListProps> = (props) => {
  const renderNavItem = (label: string) => (
    <SLi>
      <Sa>
        <SidebarNavItem key={label} label={label} />
      </Sa>
    </SLi>
  );

  const { data } = props;

  return <SUl>{data?.map((el) => renderNavItem(el))}</SUl>;
};

export default NavigationList;
