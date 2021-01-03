import React from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import CardDate, { CardDateProps } from '../../atoms/CardDate/CardDate';
import CardName, { CardNameProps } from '../../atoms/CardName/CardName';
import CardNumber, { CardNumberProps } from '../../atoms/CardNumber/CardNumber';
import img from '../../../assets/images/card.jpg';

export type CreditCardProps = TypographyProps & CardDateProps & CardNameProps & CardNumberProps;

const SWrapper = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  padding: 1rem;
  border-radius: 1rem;

  width: 100%;
  height: 100%;
  max-width: 25rem;
  max-height: 15rem;

  display: grid;
  grid-template-rows: 3fr 2fr 1fr;
`;

const SBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CreditCard: React.FC<CreditCardProps> = ({ cardDate, last4, cardName }) => (
  <SWrapper>
    <Typography variant="h5" align="left" color="textPrimary">
      Card
    </Typography>
    <CardNumber last4={last4} />
    <SBottomWrapper>
      <CardName cardName={cardName} />
      <CardDate cardDate={cardDate} />
    </SBottomWrapper>
  </SWrapper>
);

export default CreditCard;
