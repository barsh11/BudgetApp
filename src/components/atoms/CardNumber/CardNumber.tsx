import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CardNumberProps } from '../../../models/CardNumberProps';

const useStyles = makeStyles({
  numberStyle: {
    color: 'var(--color-white)',
  },
});

const getHiddenNumber = (number: number) => {
  let strNum = number.toString();
  strNum = strNum.replace(/\d(?=\d{4})/g, '*');
  return strNum.match(/.{1,4}/g)?.join(' ');
};

const CardNumber: React.FC<CardNumberProps> = ({ cardNumber }) => {
  const classes = useStyles();

  const content = getHiddenNumber(cardNumber);

  return (
    <Typography className={classes.numberStyle} variant="h5">
      {content}
    </Typography>
  );
};

export default CardNumber;
