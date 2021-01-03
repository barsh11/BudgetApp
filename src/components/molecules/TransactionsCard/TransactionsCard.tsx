import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import TransactionsInfo, { TransactionsInfoProps } from '../TransactionsInfo/TransactionsInfo';
import StarredIcon from '../../atoms/StarredIcon/StarredIcon';
import Timestamp, { TimestampProps } from '../Timestamp/Timestamp';
import capitalize from '../../../utils/capitalize';
import { DataContext, DataItemProps, DataDispatchContext } from '../../../contexts/DataContext';

export type TransactionsCardProps = TypographyProps &
  TransactionsInfoProps &
  TimestampProps & {
    company: string;
    isStarred: boolean;
    id: string;
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
  id,
}) => {
  const [isFaved, setIsFaved] = useState(false);
  const transactionList = useContext(DataContext);
  const newTransactionList = transactionList.slice();
  const updateTransactionList = useContext(DataDispatchContext);

  const starClickHandler = () => {
    setIsFaved((prev) => !prev);
  };

  useEffect(() => {
    newTransactionList.forEach((curr: DataItemProps, i: number) => {
      if (id === curr.id) {
        newTransactionList[i] = { ...curr, isStarred: isFaved };
      }
    });
    updateTransactionList(newTransactionList);
  }, [isFaved]);

  const content = <SLine>&nbsp;</SLine>;

  return (
    <SWrapper>
      {isRefund && content}
      <SHeaderWrapper>
        <Typography variant="h5">{capitalize(company)}</Typography>
        <StarredIcon clicked={starClickHandler} isStarred={isFaved} />
      </SHeaderWrapper>
      <Timestamp time={time} date={date} />
      <TransactionsInfo amount={amount} currency={currency} isRefund={isRefund} type={type} />
    </SWrapper>
  );
};

export default TransactionsCard;
