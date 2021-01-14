import React, { useContext } from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import TransactionsInfo, { TransactionsInfoProps } from '../TransactionsInfo/TransactionsInfo';
import StarredIcon from '../../atoms/StarredIcon/StarredIcon';
import Timestamp, { TimestampProps } from '../Timestamp/Timestamp';
import capitalize from '../../../utils/capitalize';
import { AppContext } from '../../../contexts/AppContext';
import convertCurrency from '../../../utils/convertCurrency';

export type TransactionsCardProps = TypographyProps &
  TransactionsInfoProps &
  TimestampProps & {
    company: string;
    id: string;
    isFaved: boolean;
    onClickFavorite: (isFaved: boolean, newFav: TransactionsCardProps) => void;
  };

const SWrapper = styled.div`
  width: 100%;
  max-width: 25rem;
  min-width: 20rem;
  max-height: 16rem;
  min-height: 15rem;

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
  background-color: var(--color-secondary);
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
  isFaved,
  onClickFavorite,
}) => {
  const app = useContext(AppContext);

  const favClickHandler = () => {
    const newFav = { type, amount, currency, isRefund, company, time, date, id, isFaved, onClickFavorite };

    onClickFavorite(isFaved, newFav);
  };

  const content = <SLine>&nbsp;</SLine>;

  return (
    <SWrapper>
      {isRefund && content}
      <SHeaderWrapper>
        <Typography variant="h5">{capitalize(company)}</Typography>
        <StarredIcon clicked={favClickHandler} isStarred={isFaved} />
      </SHeaderWrapper>
      <Timestamp time={time} date={date} />
      <TransactionsInfo
        amount={convertCurrency(amount, currency, app.currency, app.currencyRates)}
        currency={app.currency}
        isRefund={isRefund}
        type={type}
      />
    </SWrapper>
  );
};

export default TransactionsCard;
