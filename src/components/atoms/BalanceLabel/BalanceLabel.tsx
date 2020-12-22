import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { BalanceLabelProps } from '../../../models/BalanceLabelProps';

const useStyles = makeStyles({
  balanceStyle: {
    color: 'var(--color-white)',
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

const formatNumber = (number: number) => number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

const BalanceLabel: React.FC<BalanceLabelProps> = ({ balance, currency }) => {
  const classes = useStyles();

  const content = `${getCurrencySymbol(currency)}${formatNumber(balance)}`;

  return (
    <Typography className={classes.balanceStyle} variant="h3">
      {content}
    </Typography>
  );
};

export default BalanceLabel;
