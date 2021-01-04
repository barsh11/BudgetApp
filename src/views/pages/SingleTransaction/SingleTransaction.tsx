import React, { useContext } from 'react';
import styled from 'styled-components';
import { DataContext, DataItemProps } from '../../../contexts/DataContext';
import TransactionCard from '../../../components/molecules/TransactionsCard/TransactionsCard';
import ExitIcon from '../../../components/atoms/ExitIcon/ExitIcon';
import narrowTransactionType from '../../../utils/narrowTransactionType';

type singleTransaction = {
  chosenId: string;
};

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem;
  height: 100%;
  width: 100%;
`;

const SingleTransaction: React.FC<singleTransaction> = ({ chosenId }) => {
  const transactionsList = useContext(DataContext);
  const transactionItem: DataItemProps = transactionsList.filter((curr) => curr.id === chosenId)[0];

  return (
    <SWrapper>
      <ExitIcon />
      {transactionItem ? (
        <TransactionCard
          type={narrowTransactionType(transactionItem.transactionType)}
          amount={parseFloat(transactionItem.amount)}
          currency={transactionItem.currency}
          isRefund={transactionItem.transactionType === 'cancelled'}
          company={transactionItem.company}
          time={transactionItem.time}
          date={transactionItem.date}
          id={transactionItem.id}
          isStarred={transactionItem.isStarred}
        />
      ) : null}
    </SWrapper>
  );
};

export default SingleTransaction;
