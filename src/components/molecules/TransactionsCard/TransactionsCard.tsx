import React, { useState } from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import TransactionsInfo, { TransactionsInfoProps } from '../TransactionsInfo/TransactionsInfo';
import StarredIcon from '../../atoms/StarredIcon/StarredIcon';
import Timestamp, { TimestampProps } from '../Timestamp/Timestamp';
import capitalize from '../../../utils/capitalize';

export type TransactionsCardProps = TypographyProps &
  TransactionsInfoProps &
  TimestampProps & {
    company: string;
  };

const SWrapper = styled.div`
  width: 25rem;
  height: 15rem;

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

const SHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
  const [isStarred, setIsStarred] = useState(false);

  const content = <SLine>&nbsp;</SLine>;

  const starClickHandler = () => {
    setIsStarred((prev) => !prev);
  };

  return (
    <SWrapper>
      {isRefund && content}
      <SHeaderWrapper>
        <Typography variant="h5">{capitalize(company)}</Typography>
        <StarredIcon clicked={starClickHandler} isStarred={isStarred} />
      </SHeaderWrapper>
      <Timestamp time={time} date={date} />
      <TransactionsInfo amount={amount} currency={currency} isRefund={isRefund} type={type} />
    </SWrapper>
  );
};

export default TransactionsCard;
