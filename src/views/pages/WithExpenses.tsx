import React from 'react';
import Layout, { LayoutProps } from '../layout/Layout';
import ExpensesList from '../../components/organisms/ExpensesList/ExpensesList';

type WithExpensesProps = LayoutProps;

const WithExpenses: React.FC<WithExpensesProps> = ({ sidebarData, summaryData }) => (
  <Layout sidebarData={sidebarData} summaryData={summaryData}>
    <ExpensesList />
  </Layout>
);
export default WithExpenses;
