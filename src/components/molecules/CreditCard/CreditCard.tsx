import React from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import CardDate from '../../atoms/CardDate/CardDate';
import CardName from '../../atoms/CardName/CardName';
import CardNumber from '../../atoms/CardNumber/CardNumber';
import img from '../../../assets/images/card.jpg';

type CreditCardProps = TypographyProps & {
  data: { cardNumber: number; cardName: string; cardDate: string };
};

const SWrapper = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  padding: 1rem;
  border-radius: 1rem;

  width: 25rem;
  height: 15rem;

  display: grid;
  grid-template-rows: 3fr 2fr 1fr;
`;

const SBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SidebarBalance: React.FC<CreditCardProps> = (props) => {
  const { data } = props;

  return (
    <SWrapper>
      <Typography variant="h6" align="left" color="textPrimary">
        Card
      </Typography>
      <CardNumber cardNumber={data.cardNumber} />
      <SBottomWrapper>
        <CardName cardName={data.cardName} />
        <CardDate cardDate={data.cardDate} />
      </SBottomWrapper>
    </SWrapper>
  );
};

export default SidebarBalance;
