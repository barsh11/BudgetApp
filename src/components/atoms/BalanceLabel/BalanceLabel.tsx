import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import formatNumber from '../../../utils/formatNumber';

type BalanceLabelProps = TypographyProps & {
  balance: number;
  currency: string;
};

const useStyles = makeStyles({
  labelStyle: {
    marginBottom: '1.5rem',
  },
});

const getCurrencySymbol = (currency: string) => {
  switch (currency) {
    case 'NIS':
      return '\u20AA';
    default:
      return '$';
  }
};

const BalanceLabel: React.FC<BalanceLabelProps> = ({ balance, currency }) => {
  const classes = useStyles();
  const content = `${getCurrencySymbol(currency)}${formatNumber(balance)}`;

  return (
    <Typography className={classes.labelStyle} variant="h4" color="textPrimary">
      {content}
    </Typography>
  );
};

export default BalanceLabel;
