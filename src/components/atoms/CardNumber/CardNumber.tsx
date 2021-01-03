import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

export type CardNumberProps = TypographyProps & {
  last4: number;
};

const useStyles = makeStyles({
  numStyle: {
    letterSpacing: '0.3rem',
  },
});

const getHiddenNumber = (number: number) => {
  const strNum = number.toString();
  let strFull = `111111111111${strNum}`;
  strFull = strFull.replace(/\d(?=\d{4})/g, '*');
  return strFull.match(/.{1,4}/g)?.join(' ');
};

const CardNumber: React.FC<CardNumberProps> = ({ last4 }) => {
  const classes = useStyles();
  const content = getHiddenNumber(last4);

  return (
    <Typography className={classes.numStyle} variant="h6" color="textPrimary">
      {content}
    </Typography>
  );
};

export default CardNumber;
