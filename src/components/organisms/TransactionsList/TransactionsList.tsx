import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import TransactionsCard from '../../molecules/TransactionsCard/TransactionsCard';
import { CardsSummaryProps } from '../../../services/axios';
import data from '../../../mock/data.json';

const SWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.5rem;
  justify-items: center;
`;

const TransactionsList: React.FC = () => {
  const [transactionsList, setTransactionsList] = useState<CardsSummaryProps[]>([]);

  const getState = useCallback(
    (isActive: boolean) => {
      const limitedResults: CardsSummaryProps[] = [];
      const limit = 10;
      if (data instanceof Array) {
        for (let i = 0; i < limit; i += 1) {
          limitedResults[i] = { ...data[i] };
        }
        if (isActive) {
          setTransactionsList(limitedResults);
        }
      }
    },
    [data]
  );

  useEffect(() => {
    let isActive = true;

    getState(isActive);

    return () => {
      isActive = false;
    };
  }, [getState]);

  const getType = (someType: string): 'Income' | 'expense' | 'cancelled' => {
    switch (someType) {
      case 'Income':
        return 'Income';
      case 'expense':
        return 'expense';
      default:
        return 'cancelled';
    }
  };

  const renderExpenseCard = (curr: CardsSummaryProps) => (
    <TransactionsCard
      key={curr.id}
      company={curr.company}
      amount={parseFloat(curr.amount)}
      currency={curr.currency}
      isRefund={curr.transactionType === 'cancelled'}
      type={getType(curr.transactionType)}
      time={curr.time}
      date={curr.date}
    />
  );

  return <SWrapper>{transactionsList.map((el) => renderExpenseCard(el))}</SWrapper>;
};

export default TransactionsList;
