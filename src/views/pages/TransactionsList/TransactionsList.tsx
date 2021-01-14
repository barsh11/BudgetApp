import React, { useContext } from 'react';
import TransactionsCard, {
  TransactionsCardProps,
} from '../../../components/molecules/TransactionsCard/TransactionsCard';
import { DataItemProps, DataContext, DataListProps } from '../../../contexts/DataContext';
import narrowTransactionType from '../../../utils/narrowTransactionType';
import SWrapper from '../MainStyle';
import useLocalStorage from '../../../hooks/useLocalStorage';

const TransactionsList: React.FC = () => {
  const [storedFavs, setStoredFavs] = useLocalStorage('favorits', [{}]);
  const transactionsList: DataListProps = useContext(DataContext);

  const updateLocalStorage = (isFaved: boolean, newFav: TransactionsCardProps) => {
    const newFavs = storedFavs.slice();

    if (!isFaved) {
      newFavs.push(newFav);
      setStoredFavs(newFavs);
    } else {
      const filteredData = newFavs.filter((cur: any) => cur.id !== newFav.id);
      setStoredFavs(filteredData);
    }
  };

  const itemInFavs = (id: string): number => storedFavs.findIndex((item: TransactionsCardProps) => item.id === id);

  const renderExpenseCard = (curr: DataItemProps) => (
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
      isFaved={itemInFavs(curr.id) > 0}
      onClickFavorite={updateLocalStorage}
    />
  );

  return <SWrapper>{transactionsList?.map((el) => renderExpenseCard(el))}</SWrapper>;
};

export default TransactionsList;
