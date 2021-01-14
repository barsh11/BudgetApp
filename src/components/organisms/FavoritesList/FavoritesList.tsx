import React from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import TransactionsCard, { TransactionsCardProps } from '../../molecules/TransactionsCard/TransactionsCard';
import useFavs from '../../../hooks/useFavs';

export type FavoritesListProps = TypographyProps;

const SWrapper = styled.div`
  margin-bottom: 2.5rem;
`;

const SBottomWrapper = styled.div`
  display: flex;

  margin-top: 1rem;
  overflow-x: hidden;
  padding: 1rem 0;

  &:hover,
  &:active,
  &:focus {
    overflow-x: scroll;
  }

  > * {
    margin-right: 2rem;
  }
`;

const FavoritesList: React.FC = () => {
  const [favs, updateFavs] = useFavs();

  const itemInFavs = (id: string): number => favs.findIndex((item: TransactionsCardProps) => item.id === id);

  const renderFavItem = (curr: TransactionsCardProps) => (
    <TransactionsCard
      key={curr.id}
      id={curr.id}
      company={curr.company}
      amount={curr.amount}
      currency={curr.currency}
      isRefund={curr.isRefund}
      type={curr.type}
      time={curr.time}
      date={curr.date}
      isFaved={itemInFavs(curr.id) > 0}
      onClickFavorite={updateFavs}
    />
  );

  return (
    <SWrapper>
      <Typography variant="h4" color="textSecondary">
        Favorites
      </Typography>
      <SBottomWrapper>{favs.slice(1).map((el: TransactionsCardProps) => renderFavItem(el))}</SBottomWrapper>
    </SWrapper>
  );
};

export default FavoritesList;
