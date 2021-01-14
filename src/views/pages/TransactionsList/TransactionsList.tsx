import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import TransactionsCard, {
  TransactionsCardProps,
} from '../../../components/molecules/TransactionsCard/TransactionsCard';
import { DataItemProps, DataContext, DataListProps } from '../../../contexts/DataContext';
import narrowTransactionType from '../../../utils/narrowTransactionType';
import ExitIcon from '../../../components/atoms/ExitIcon/ExitIcon';
import SWrapper from '../MainStyle';
import useFavs from '../../../hooks/useFavs';
import slugify from '../../../utils/slugify';

const TransactionsList: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const history = useHistory();
  const transactionsList: DataListProps = useContext(DataContext);
  const [favs, updateFavs] = useFavs();

  const itemInFavs = (id: string): number => favs.findIndex((item: TransactionsCardProps) => item.id === id);

  const transactionCancelledHandler = () => {
    history.replace('/categories');
  };

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
      onClickFavorite={updateFavs}
    />
  );

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
  return content;
};

export default TransactionsList;
