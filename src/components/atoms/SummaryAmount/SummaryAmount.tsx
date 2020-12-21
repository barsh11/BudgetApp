import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { SummaryAmountProps } from '../../../models/SummaryAmountProps';

const useStyles = makeStyles({
  currencyStyle: {
    color: 'var(--color-grey-light)',
  },
  amountStyle: {
    color: (amount) => (amount > 0 ? 'primary' : 'var(--color-black)'),
  },
});

const SummaryAmount: React.FC<SummaryAmountProps> = ({ amount, currency }) => {
  const classes = useStyles(amount);

  return (
    <Box component="div">
      <Typography className={classes.amountStyle} variant="h6" align="right">
        {amount > 0 ? `+${amount}` : amount}
      </Typography>
      <Typography className={classes.currencyStyle} variant="subtitle1" align="right">
        {currency}
      </Typography>
    </Box>
  );
};

export default SummaryAmount;
