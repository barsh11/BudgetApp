import React from 'react';
import styled from 'styled-components';
import Sidebar from '../template/Sidebar';
import Dashboard from '../template/Dashboard';
import Summary from '../template/Summary';

type WithDashboardProps = {
  data: {
    sidebarData: { balance: number; currency: string; labels: ('cards' | 'dashboard' | 'expenses' | 'incomes')[] };
    dashboardData: { cardNumber: number; cardName: string; cardDate: string };
    summaryData: {
      data: {
        isCancelled?: boolean;
        company?: string;
        date: string;
        amount: number;
        currency: string;
        type: 'expense' | 'income' | 'cancel';
        isPaypal?: boolean;
      }[];
      imgSrc: string;
      userName: string;
      userEmail: string;
    };
  };
};

const SWrapper = styled.div`
  display: flex;

  height: 68.2rem;
`;

const WithDashboard: React.FC<WithDashboardProps> = ({ data }) => (
  <SWrapper>
    <Sidebar data={data.sidebarData} />
    <Dashboard data={data.dashboardData} />
    <Summary
      data={data.summaryData.data}
      imgSrc={data.summaryData.imgSrc}
      userName={data.summaryData.userName}
      userEmail={data.summaryData.userEmail}
    />
  </SWrapper>
);

export default WithDashboard;
