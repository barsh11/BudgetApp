import React from 'react';
import Layout, { LayoutProps } from '../layout/Layout';
import TransactionsList from '../../components/organisms/TransactionsList/TransactionsList';

type WithTransactionsProps = LayoutProps;

const WithTransactions: React.FC<WithTransactionsProps> = ({ sidebarData, summaryData }) => (
  <Layout sidebarData={sidebarData} summaryData={summaryData}>
    <TransactionsList />
  </Layout>
);
export default WithTransactions;
