/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import Sidebar, { SidebarProps } from '../template/Sidebar';
import Summary, { SummaryProps } from '../template/Summary';

export type LayoutProps = {
  sidebarData: SidebarProps;
  summaryData: SummaryProps;
};

const SWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  width: 100rem;
  height: 68.2rem;

  overflow: hidden;
  border-radius: 2rem;
  box-shadow: var(--shadow-dark);
  margin: 8rem auto;
`;

const SMain = styled.main`
  background-color: var(--color-white-dark);
  border-radius: 2rem 0 0 2rem;
  margin-left: -2rem;
  overflow-y: scroll;
  padding: 3.2rem 3.2rem 3.2rem 5.2rem;
`;

const Layout: React.FC<LayoutProps> = (props) => (
  <SWrapper>
    <Sidebar
      balance={props.sidebarData.balance}
      currency={props.sidebarData.currency}
      navList={props.sidebarData.navList}
    />
    <SMain>{props.children}</SMain>
    <Summary
      imgSrc={props.summaryData.imgSrc}
      userName={props.summaryData.userName}
      userEmail={props.summaryData.userEmail}
      summaryList={props.summaryData.summaryList}
    />
  </SWrapper>
);

export default Layout;
