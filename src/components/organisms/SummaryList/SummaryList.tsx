import React from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import SummaryItem from '../../molecules/SummaryItem/SummaryItem';
import { TransactionsSummaryProps } from '../../../services/axios';
import useTranSumData from '../../../hooks/useTranSumData';
import narrowTransactionType from '../../../utils/narrowTransactionType';

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
  const summaryList: TransactionsSummaryProps[] = useTranSumData();

  const renderSummaryItem = (curr: TransactionsSummaryProps) => (
    <SLi key={curr.id}>
      <SummaryItem
        company={curr.company}
        date={curr.date}
        amount={parseFloat(curr.amount)}
        currency={curr.currency}
        type={narrowTransactionType(curr.transactionType)}
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
