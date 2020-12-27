import React from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import SummaryItem, { SummaryItemProps } from '../../molecules/SummaryItem/SummaryItem';

export type SummaryListProps = TypographyProps & {
  summaryList: SummaryItemProps[];
};

const SWrapper = styled.div``;

const SUl = styled.ul`
  margin-top: 1.5rem;

  list-style: none;
`;

const SLi = styled.li`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const SummaryList: React.FC<SummaryListProps> = (props) => {
  const renderSummaryItem = (item: SummaryItemProps) => (
    <SLi>
      <SummaryItem
        key={item.date}
        isCancelled={item.isCancelled}
        company={item.company}
        date={item.date}
        amount={item.amount}
        currency={item.currency}
        type={item.type}
        isPaypal={item.isPaypal}
      />
    </SLi>
  );

  const { summaryList } = props;

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
