import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import Box, { BoxProps } from '@material-ui/core/Box';
import getCurrencySymbol from '../../../utils/getCurrencySymbol';
import formatNumber from '../../../utils/formatNumber';

export type ExpensesAmountProps = TypographyProps &
  BoxProps & {
    amount: number;
    currency: string;
    isRefund?: boolean;
  };

const useStyles = makeStyles({
  refundStyle: {
    color: 'var(--color-forthtiary)',
  },
});

const ExpensesAmount: React.FC<ExpensesAmountProps> = ({ amount, currency, isRefund }) => {
  const classes = useStyles();

  // you can even go further and do:
  // const deposit = getDeopsit(amount, currency);

  const deposit = `${formatNumber(amount)} ${getCurrencySymbol(currency)}`;
  let content = (
    <Typography color="textSecondary" variant="h6">
      {deposit}
    </Typography>
  );

  // can we get refaund componenets? so it will be cleaner: wdyt?
  // if (!isRefund) return <Deposit deposit={deposit}/>
  // if (isRefund) return <Refaund deposit={deposit}/>

  if (isRefund) {
    content = (
      <Box className={classes.refundStyle} component="div">
        <Typography variant="h6">{deposit}</Typography>
        <Typography variant="body1">Refunded</Typography>
      </Box>
    );
  }

  return content;
};

export default ExpensesAmount;
