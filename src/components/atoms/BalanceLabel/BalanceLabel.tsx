import React from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

type BalanceLabelProps = TypographyProps & {
  balance: number;
  currency: string;
};

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
  const content = `${getCurrencySymbol(currency)}${formatNumber(balance)}`;

  return (
    <Typography variant="h3" color="textPrimary">
      {content}
    </Typography>
  );
};

export default BalanceLabel;
