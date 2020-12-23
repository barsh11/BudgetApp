import React from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import formatNumber from '../../../utils/formatNumber';

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

const BalanceLabel: React.FC<BalanceLabelProps> = ({ balance, currency }) => {
  const content = `${getCurrencySymbol(currency)}${formatNumber(balance)}`;

  return (
    <Typography variant="h3" color="textPrimary">
      {content}
    </Typography>
  );
};

export default BalanceLabel;
