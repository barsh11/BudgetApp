import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import Box, { BoxProps } from '@material-ui/core/Box';
import getCurrencySymbol from '../../../utils/getCurrencySymbol';
import formatNumber from '../../../utils/formatNumber';

export type TransactionsAmountProps = TypographyProps &
  BoxProps & {
    amount: number;
    currency: string;
    isRefund: boolean;
  };

const useStyles = makeStyles({
  refundStyle: {
    color: 'var(--color-secondary)',
  },
  contentStyle: {
    '@media only screen and (max-width: 94em)': {
      fontSize: '0.9rem',
    },
  },
});

const TransactionsAmount: React.FC<TransactionsAmountProps> = ({ amount, currency, isRefund }) => {
  const classes = useStyles();

  const deposit = `${formatNumber(amount)} ${getCurrencySymbol(currency)}`;
  let content = (
    <Typography color="textSecondary" variant="h6">
      {deposit}
    </Typography>
  );
  if (isRefund) {
    content = (
      <Box className={classes.refundStyle} component="div">
        <Typography className={classes.contentStyle} variant="h6">
          {deposit}
        </Typography>
        <Typography variant="body1">Refunded</Typography>
      </Box>
    );
  }

  return content;
};

export default TransactionsAmount;
