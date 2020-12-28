import React from 'react';
import Layout, { LayoutProps } from '../layout/Layout';
import Expenses, { ExpensesProps } from '../template/Expenses';

type WithExpensesProps = LayoutProps & {
  expensesData: ExpensesProps;
};

const WithExpenses: React.FC<WithExpensesProps> = ({ sidebarData, expensesData, summaryData }) => (
  <Layout sidebarData={sidebarData} summaryData={summaryData}>
    <Expenses expList={expensesData.expList} />
  </Layout>
);
export default WithExpenses;
