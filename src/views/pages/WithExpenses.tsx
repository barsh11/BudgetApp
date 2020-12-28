import React from 'react';
import styled from 'styled-components';
import Sidebar, { SidebarProps } from '../template/Sidebar';
import Expenses, { ExpensesProps } from '../template/Expenses';
import Summary, { SummaryProps } from '../template/Summary';

type WithExpensesProps = {
  sidebarData: SidebarProps;
  expensesData: ExpensesProps;
  summaryData: SummaryProps;
};

const SWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  width: 100rem;
  height: 68.2rem;

  overflow-y: scroll;
  box-shadow: var(--shadow-light);
`;

const WithExpenses: React.FC<WithExpensesProps> = ({ sidebarData, expensesData, summaryData }) => (
  <SWrapper>
    <Sidebar balance={sidebarData.balance} currency={sidebarData.currency} navList={sidebarData.navList} />
    <Expenses expList={expensesData.expList} />
    <Summary
      imgSrc={summaryData.imgSrc}
      userName={summaryData.userName}
      userEmail={summaryData.userEmail}
      summaryList={summaryData.summaryList}
    />
  </SWrapper>
);
export default WithExpenses;
