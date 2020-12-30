import React from 'react';
import styled from 'styled-components';
import CreditCard, { CreditCardProps } from '../../components/molecules/CreditCard/CreditCard';

export type CardsProps = {
  cardsList: CreditCardProps[];
};

const SWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.5rem;
  justify-items: center;
`;

const renderCard = ({ cardDate, cardName, cardNumber }: CreditCardProps) => (
  <CreditCard key={cardNumber} cardDate={cardDate} cardName={cardName} cardNumber={cardNumber} />
);

const Cards: React.FC<CardsProps> = ({ cardsList }) => <SWrapper>{cardsList.map((el) => renderCard(el))}</SWrapper>;

export default Cards;
