import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { DataContext, DataItemProps } from '../../../contexts/DataContext';
import { AppDispatchContext, AppContext } from '../../../contexts/AppContext';
import Mapbox from '../../../components/organisms/Mapbox/Mapbox';
import TransactionCard, {
  TransactionsCardProps,
} from '../../../components/molecules/TransactionsCard/TransactionsCard';
import ExitIcon from '../../../components/atoms/ExitIcon/ExitIcon';
import narrowTransactionType from '../../../utils/narrowTransactionType';
import useFavs from '../../../hooks/useFavs';
import useLocation from '../../../hooks/useLocation';

const SWrapper = styled.div`
  padding: 2rem;
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-rows: 2fr 3fr;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: start;
`;

const SingleTransaction: React.FC = () => {
  const [favs, updateFavs] = useFavs();
  const [loc, updateLoc, cancelLoc] = useLocation();
  const { transactionId } = useParams<{ transactionId: string }>();
  const history = useHistory();
  const transactionsList = useContext(DataContext).slice(0, 40);
  const transactionItem: DataItemProps = transactionsList.filter((curr) => curr.id === transactionId)[0];
  const setApp = useContext(AppDispatchContext);
  const app = useContext(AppContext);

  const transactionCancelledHandler = () => {
    const newApp = { ...app };
    setApp({ ...newApp, summaryItemId: '' });
    history.replace('/dashboard');
  };

  const mapCancelledHandler = () => {
    cancelLoc();
    history.replace('/dashboard');
  };

  const itemInFavs = (id: string): number => favs.findIndex((item: TransactionsCardProps) => item.id === id);

  let content;
  if (transactionItem) {
    content = (
      <SWrapper>
        <ExitIcon clicked={transactionCancelledHandler} />
        {transactionItem ? (
          <TransactionCard
            type={narrowTransactionType(transactionItem.transactionType)}
            amount={parseFloat(transactionItem.amount)}
            currency={transactionItem.currency}
            isRefund={transactionItem.transactionType === 'cancelled'}
            company={transactionItem.company}
            time={transactionItem.time}
            location={{ ...transactionItem.location }}
            date={transactionItem.date}
            id={transactionItem.id}
            isFaved={itemInFavs(transactionItem.id) > 0}
            onClickFavorite={updateFavs}
            onClickMap={updateLoc}
          />
        ) : null}
      </SWrapper>
    );
  }
  if (loc && transactionItem) {
    content = (
      <>
        <ExitIcon clicked={mapCancelledHandler} />
        <Mapbox company={loc.company} lat={loc.lat} lng={loc.lng} />
      </>
    );
  }

  return content || <></>;
};

export default SingleTransaction;
