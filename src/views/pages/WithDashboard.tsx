import React from 'react';
import styled from 'styled-components';
import Sidebar, { SidebarProps } from '../template/Sidebar';
import Dashboard, { DashboardProps } from '../template/Dashboard';
import Summary, { SummaryProps } from '../template/Summary';

type WithDashboardProps = {
  sidebarData: SidebarProps;
  dashboardData: DashboardProps;
  summaryData: SummaryProps;
};

const SWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  // clean spaces
  width: 100rem;
  height: 68.2rem;
  // clean spaces
  overflow-y: scroll;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const WithDashboard: React.FC<WithDashboardProps> = (props) => {
  // distructure
  const { sidebarData, dashboardData, summaryData } = props;

  return (
    <SWrapper>
      <Sidebar balance={sidebarData.balance} currency={sidebarData.currency} navList={sidebarData.navList} />
      <Dashboard
        cardDate={dashboardData.cardDate}
        cardNumber={dashboardData.cardNumber}
        cardName={dashboardData.cardName}
      />
      <Summary
        imgSrc={summaryData.imgSrc}
        userName={summaryData.userName}
        userEmail={summaryData.userEmail}
        summaryList={summaryData.summaryList}
      />
    </SWrapper>
  );
};

export default WithDashboard;
