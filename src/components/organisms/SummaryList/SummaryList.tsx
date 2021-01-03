import React from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import SummaryItem from '../../molecules/SummaryItem/SummaryItem';
import { DataListProps, DataItemProps } from '../../../contexts/DataContext';
import useData from '../../../hooks/useData';
import narrowTransactionType from '../../../utils/narrowTransactionType';

export type SummaryListProps = TypographyProps;

const SWrapper = styled.div`
  height: 59%;
`;

const SUl = styled.ul`
  margin-top: 1.5rem;

  list-style: none;
`;

const SLi = styled.li`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const SummaryList: React.FC<SummaryListProps> = () => {
  const summaryList: DataListProps = useData();

  const renderSummaryItem = (curr: DataItemProps) => (
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
