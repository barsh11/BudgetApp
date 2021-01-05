import React from 'react';
import { Link } from 'react-router-dom';
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

const SLink = styled(Link)`
  text-decoration: none;

  &:hover,
  &:active {
    cursor: pointer;
  }
`;

const SummaryList: React.FC<SummaryListProps> = () => {
  const summaryList: DataListProps = useData();

  const renderSummaryItem = (curr: DataItemProps) => (
    <SLi key={curr.id}>
      <SLink to={`/transactions/${curr.id}`}>
        <SummaryItem
          id={curr.id}
          company={curr.company}
          date={curr.date}
          amount={parseFloat(curr.amount)}
          currency={curr.currency}
          type={narrowTransactionType(curr.transactionType)}
          isPaypal={curr.paypal}
        />
      </SLink>
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
