import React from 'react';
import styled from 'styled-components';
import TransactionsCard from '../../../components/molecules/TransactionsCard/TransactionsCard';
import { TransactionsSummaryProps } from '../../../services/axios';
import useTranSumData from '../../../hooks/useTranSumData';
import narrowTransactionType from '../../../utils/narrowTransactionType';

const SWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.5rem;
  justify-items: center;
`;

const TransactionsList: React.FC = () => {
  const transactionsList: TransactionsSummaryProps[] = useTranSumData();

  const renderExpenseCard = (curr: TransactionsSummaryProps) => (
    <TransactionsCard
      key={curr.id}
      company={curr.company}
      amount={parseFloat(curr.amount)}
      currency={curr.currency}
      isRefund={curr.transactionType === 'cancelled'}
      type={narrowTransactionType(curr.transactionType)}
      time={curr.time}
      date={curr.date}
    />
  );

  return <SWrapper>{transactionsList.map((el) => renderExpenseCard(el))}</SWrapper>;
};

export default TransactionsList;
