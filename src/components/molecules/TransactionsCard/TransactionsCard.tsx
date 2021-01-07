import React, { useState, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import TransactionsInfo, { TransactionsInfoProps } from '../TransactionsInfo/TransactionsInfo';
import StarredIcon from '../../atoms/StarredIcon/StarredIcon';
import Timestamp, { TimestampProps } from '../Timestamp/Timestamp';
import capitalize from '../../../utils/capitalize';
import { DataContext, DataItemProps, DataDispatchContext, DataListProps } from '../../../contexts/DataContext';

export type TransactionsCardProps = TypographyProps &
  TransactionsInfoProps &
  TimestampProps & {
    company: string;
    id: string;
  };

const SWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 25rem;
  min-width: 20rem;
  max-height: 15rem;

  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
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
  const [isFaved, setIsFaved] = useState<boolean>(false);
  const transactionList = useContext(DataContext);
  const setTransactionList = useContext(DataDispatchContext);

  const starClickHandler = () => {
    setIsFaved((prev) => !prev);
  };

  const getIsFaved = (list: DataListProps): boolean => {
    const index = list.findIndex((curr: DataItemProps) => curr.id === id);
    return list[index].isStarred;
  };

  const isFirst = useRef(true);
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    const newTransactionList = transactionList.slice();
    const index = newTransactionList.findIndex((curr: DataItemProps) => curr.id === id);
    newTransactionList[index].isStarred = isFaved;
    setTransactionList(newTransactionList);
  }, [isFaved]);

  const content = <SLine>&nbsp;</SLine>;

  return (
    <SWrapper>
      {isRefund && content}
      <SHeaderWrapper>
        <Typography variant="h5">{capitalize(company)}</Typography>
        <StarredIcon clicked={starClickHandler} isStarred={getIsFaved(transactionList)} />
      </SHeaderWrapper>
      <Timestamp time={time} date={date} />
      <TransactionsInfo amount={amount} currency={currency} isRefund={isRefund} type={type} />
    </SWrapper>
  );
};

export default TransactionsCard;
