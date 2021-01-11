import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { DataContext, DataItemProps } from '../../../contexts/DataContext';
import { AppDispatchContext, AppContext } from '../../../contexts/AppContext';
import TransactionCard from '../../../components/molecules/TransactionsCard/TransactionsCard';
import ExitIcon from '../../../components/atoms/ExitIcon/ExitIcon';
import narrowTransactionType from '../../../utils/narrowTransactionType';

const SWrapper = styled.div`
  padding: 2rem;
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-rows: 2fr 3fr;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: start;
`;

const SingleTransaction: React.FC = () => {
  const { transactionId } = useParams<{ transactionId: string }>();
  const history = useHistory();
  const transactionsList = useContext(DataContext);
  const transactionItem: DataItemProps = transactionsList.filter((curr) => curr.id === transactionId)[0];
  const setApp = useContext(AppDispatchContext);
  const app = useContext(AppContext);

  const transactionCancelledHandler = () => {
    const newApp = { ...app };
    newApp.summaryItemId = '';
    setApp(newApp);
    history.replace('/dashboard');
  };

  return (
    <SWrapper>
      <ExitIcon clicked={transactionCancelledHandler} />
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
        />
      ) : null}
    </SWrapper>
  );
};

export default SingleTransaction;
