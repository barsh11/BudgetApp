import React from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

type CardNumberProps = TypographyProps & {
  cardNumber: number;
};

const getHiddenNumber = (number: number) => {
  let strNum = number.toString();
  strNum = strNum.replace(/\d(?=\d{4})/g, '*');
  return strNum.match(/.{1,4}/g)?.join(' ');
};

const CardNumber: React.FC<CardNumberProps> = ({ cardNumber }) => {
  const content = getHiddenNumber(cardNumber);

  return (
    <Typography variant="h5" color="textPrimary">
      {content}
    </Typography>
  );
};

export default CardNumber;
