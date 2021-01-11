import React, { useContext } from 'react';
import TransactionsCard from '../../../components/molecules/TransactionsCard/TransactionsCard';
import { DataItemProps, DataContext, DataListProps } from '../../../contexts/DataContext';
import narrowTransactionType from '../../../utils/narrowTransactionType';
import SWrapper from '../MainStyle';

const TransactionsList: React.FC = () => {
  const transactionsList: DataListProps = useContext(DataContext);

  const renderExpenseCard = (curr: DataItemProps) => (
    <TransactionsCard
      key={curr.id}
      id={curr.id}
      company={curr.company}
      amount={parseFloat(curr.amount)}
      currency={curr.currency}
      isRefund={curr.transactionType === 'cancelled'}
      type={narrowTransactionType(curr.transactionType)}
      time={curr.time}
      date={curr.date}
    />
  );

  return <SWrapper>{transactionsList?.map((el) => renderExpenseCard(el))}</SWrapper>;
};

export default TransactionsList;
