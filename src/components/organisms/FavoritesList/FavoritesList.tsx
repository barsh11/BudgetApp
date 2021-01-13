import React from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import { DataListProps, DataItemProps } from '../../../contexts/DataContext';
import TransactionsCard from '../../molecules/TransactionsCard/TransactionsCard';
import narrowTransactionType from '../../../utils/narrowTransactionType';

export type FavoritesListProps = TypographyProps;

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 35%;
`;

const SBottomWrapper = styled.div`
  display: flex;

  overflow-x: hidden;

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
  const favsList: DataListProps = JSON.parse(localStorage.getItem('favorites') || '[]');

  const renderFavItem = (curr: DataItemProps) => (
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
    />
  );

  return (
    <SWrapper>
      <Typography variant="h4" color="textSecondary">
        Favorites
      </Typography>
      <SBottomWrapper>{favsList?.map((el) => renderFavItem(el))}</SBottomWrapper>
    </SWrapper>
  );
};

export default FavoritesList;
