import React from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import SummaryItem, { SummaryItemProps } from '../../molecules/SummaryItem/SummaryItem';

type SummaryListProps = TypographyProps & {
  data: {
    isCancelled?: boolean;
    company?: string;
    date: string;
    amount: number;
    currency: string;
    type: 'expense' | 'income' | 'cancel';
    isPaypal?: boolean;
  }[];
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
  const renderSummaryItem = ({ isCancelled, company, date, amount, currency, type, isPaypal }: SummaryItemProps) => (
    <SLi>
      <SummaryItem
        key={date}
        isCancelled={isCancelled}
        company={company}
        date={date}
        amount={amount}
        currency={currency}
        type={type}
        isPaypal={isPaypal}
      />
    </SLi>
  );

  const { data } = props;

  return (
    <SWrapper>
      <Typography variant="h4" color="textSecondary">
        Payment summary
      </Typography>
      <SUl>
        {data?.map((el) =>
          renderSummaryItem({
            isCancelled: el.isCancelled,
            company: el.company,
            date: el.date,
            amount: el.amount,
            currency: el.currency,
            type: el.type,
            isPaypal: el.isPaypal,
          })
        )}
      </SUl>
    </SWrapper>
  );
};

export default SummaryList;
