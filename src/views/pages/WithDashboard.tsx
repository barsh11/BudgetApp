import React from 'react';
import Layout, { LayoutProps } from '../layout/Layout';
import Dashboard, { DashboardProps } from '../template/Dashboard';

type WithDashboardProps = LayoutProps & {
  dashboardData: DashboardProps;
};

const WithDashboard: React.FC<WithDashboardProps> = ({ sidebarData, summaryData, dashboardData }) => (
  <Layout sidebarData={sidebarData} summaryData={summaryData}>
    <Dashboard cardsList={dashboardData.cardsList} />
  </Layout>
);
export default WithDashboard;
