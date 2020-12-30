import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import SummaryItem from '../../molecules/SummaryItem/SummaryItem';
import { CardsSummaryProps } from '../../../services/axios';
import data from '../../../mock/data.json';

export type SummaryListProps = TypographyProps;

const SWrapper = styled.div``;

const SUl = styled.ul`
  margin-top: 1.5rem;

  list-style: none;
`;

const SLi = styled.li`
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const SummaryList: React.FC<SummaryListProps> = () => {
  const [summaryList, setSummaryList] = useState<CardsSummaryProps[]>([]);

  const getState = useCallback(
    (isActive: boolean) => {
      const limitedResults: CardsSummaryProps[] = [];
      const limit = 10;
      if (data instanceof Array) {
        for (let i = 0; i < limit; i += 1) {
          limitedResults[i] = { ...data[i] };
        }
        if (isActive) {
          // eslint-disable-next-line no-console
          console.log(limitedResults);
          setSummaryList(limitedResults);
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

  const renderSummaryItem = (curr: CardsSummaryProps) => (
    <SLi>
      <SummaryItem
        key={curr.id}
        company={curr.company}
        date={curr.date}
        amount={parseFloat(curr.amount)}
        currency={curr.currency}
        type={getType(curr.transactionType)}
        isPaypal={curr.paypal}
      />
    </SLi>
  );

  return (
    <SWrapper>
      <Typography variant="h5" color="textSecondary">
        Payment summary
      </Typography>
      <SUl>{summaryList.map((el) => renderSummaryItem(el))}</SUl>
    </SWrapper>
  );
};

export default SummaryList;
