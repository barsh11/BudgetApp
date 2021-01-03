import React from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import TransactionsInfo, { TransactionsInfoProps } from '../TransactionsInfo/TransactionsInfo';
import Timestamp, { TimestampProps } from '../Timestamp/Timestamp';
import capitalize from '../../../utils/capitalize';

export type TransactionsCardProps = TypographyProps &
  TransactionsInfoProps &
  TimestampProps & {
    company: string;
  };

const SWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 25rem;
  max-height: 15rem;

  padding: 1.5rem 2rem;
  background-color: var(--color-white);
  border-radius: 1rem;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SLine = styled.div`
  height: 0.4rem;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--color-forthtiary);
`;

const TransactionsCard: React.FC<TransactionsCardProps> = ({
  type,
  amount,
  currency,
  isRefund,
  company,
  time,
  date,
}) => {
  const content = <SLine>&nbsp;</SLine>;

  return (
    <SWrapper>
      {isRefund && content}
      <Typography variant="h5">{capitalize(company)}</Typography>
      <Timestamp time={time} date={date} />
      <TransactionsInfo amount={amount} currency={currency} isRefund={isRefund} type={type} />
    </SWrapper>
  );
};

export default TransactionsCard;
