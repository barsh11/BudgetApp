import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

export type CardNumberProps = TypographyProps & {
  cardNumber: number;
};

const useStyles = makeStyles({
  numStyle: {
    letterSpacing: '0.3rem',
  },
});

// move to utils and pls add test using jest for it
const getHiddenNumber = (number: number) => {
  let strNum = number.toString();
  strNum = strNum.replace(/\d(?=\d{4})/g, '*');
  return strNum.match(/.{1,4}/g)?.join(' ');
};

const CardNumber: React.FC<CardNumberProps> = ({ cardNumber }) => {
  const classes = useStyles();
  const content = getHiddenNumber(cardNumber);

  return (
    <Typography className={classes.numStyle} variant="h6" color="textPrimary">
      {content}
    </Typography>
  );
};

export default CardNumber;
