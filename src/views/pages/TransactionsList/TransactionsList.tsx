import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import TransactionsCard, {
  TransactionsCardProps,
} from '../../../components/molecules/TransactionsCard/TransactionsCard';
import Mapbox from '../../../components/organisms/Mapbox/Mapbox';
import { DataItemProps, DataContext, DataListProps } from '../../../contexts/DataContext';
import narrowTransactionType from '../../../utils/narrowTransactionType';
import ExitIcon from '../../../components/atoms/ExitIcon/ExitIcon';
import SWrapper from '../MainStyle';
import useFavs from '../../../hooks/useFavs';
import useLocation from '../../../hooks/useLocation';
import slugify from '../../../utils/slugify';

const TransactionsList: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const history = useHistory();
  const transactionsList: DataListProps = useContext(DataContext).slice(0, 40);
  const [favs, updateFavs] = useFavs();
  const [loc, updateLoc, cancelLoc] = useLocation();

  const itemInFavs = (id: string): number => favs.findIndex((item: TransactionsCardProps) => item.id === id);

  const transactionCancelledHandler = () => {
    history.replace('/categories');
  };

  const mapCancelledHandler = () => {
    cancelLoc();
    if (category) history.replace(`/categories/${category}`);
    else history.replace(`/transactions`);
  };

  const renderExpenseCard = (curr: DataItemProps) => {
    const { lat, lng } = curr.location;
    return (
      <TransactionsCard
        key={curr.id}
        id={curr.id}
        company={curr.company}
        amount={parseFloat(curr.amount)}
        currency={curr.currency}
        isRefund={curr.transactionType === 'cancelled'}
        type={narrowTransactionType(curr.transactionType)}
        time={curr.time}
        date={curr.date}
        location={{ lat, lng }}
        isFaved={itemInFavs(curr.id) > 0}
        onClickFavorite={updateFavs}
        onClickMap={updateLoc}
      />
    );
  };

  let content = <SWrapper>{transactionsList?.map((el) => renderExpenseCard(el))}</SWrapper>;
  if (category) {
    const filteredData = transactionsList.filter((cur) => slugify(cur.category) === category);
    content = (
      <>
        <ExitIcon clicked={transactionCancelledHandler} />
        <SWrapper>{filteredData?.map((el) => renderExpenseCard(el))}</SWrapper>
      </>
    );
  }
  if (loc) {
    content = (
      <>
        <ExitIcon clicked={mapCancelledHandler} />
        <Mapbox company={loc.company} lat={loc.lat} lng={loc.lng} />
      </>
    );
  }

  return content;
};

export default TransactionsList;
