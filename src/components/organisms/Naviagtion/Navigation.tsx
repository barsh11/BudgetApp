import React from 'react';
import styled from 'styled-components';
import SidebarNavItem from '../../molecules/SidebarNavItem/SidebarNavItem';

const SUl = styled.ul``;

const Sli = styled.li`
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

const SidebarBalance: React.FC = () => (
  <SUl>
    <Sli>
      <Sa>
        <SidebarNavItem label="dashboard" />
      </Sa>
    </Sli>
    <Sli>
      <Sa>
        <SidebarNavItem label="cards" />
      </Sa>
    </Sli>
    <Sli>
      <Sa>
        <SidebarNavItem label="expenses" />
      </Sa>
    </Sli>
    <Sli>
      <Sa>
        <SidebarNavItem label="incomes" />
      </Sa>
    </Sli>
  </SUl>
);

export default SidebarBalance;
