import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import ExpensesCard from '../../molecules/ExpensesCard/ExpensesCard';
import { CardsSummaryProps } from '../../../services/axios';
import data from '../../../mock/data.json';

const SWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.5rem;
  justify-items: center;
`;

const ExpensesList: React.FC = () => {
  const [expensesList, setExpensesList] = useState<CardsSummaryProps[]>([]);

  const getState = useCallback(
    (isActive: boolean) => {
      const limitedResults: CardsSummaryProps[] = [];
      const limit = 10;
      if (data instanceof Array) {
        for (let i = 0; i < data.length; i += 1) {
          if (
            (data[i].transactionType === 'expense' || data[i].transactionType === 'cancelled') &&
            limitedResults.length <= limit
          ) {
            limitedResults[limitedResults.length] = { ...data[i] };
          }
          if (limitedResults.length === limit) {
            break;
          }
        }
        if (isActive) {
          setExpensesList(limitedResults);
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

  const renderExpenseCard = (curr: CardsSummaryProps, link: string) => (
    <ExpensesCard
      key={curr.id}
      company={curr.company}
      amount={parseFloat(curr.amount)}
      currency={curr.currency}
      isRefund={curr.transactionType === 'cancelled'}
      link={link}
      time={curr.time}
      date={curr.date}
    />
  );

  return <SWrapper>{expensesList.map((el) => renderExpenseCard(el, 'https://www.google.com'))}</SWrapper>;
};

export default ExpensesList;
