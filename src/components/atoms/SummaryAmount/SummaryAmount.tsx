import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import Box, { BoxProps } from '@material-ui/core/Box';
import formatNumber from '../../../utils/formatNumber';

type SummaryAmountProps = BoxProps &
  TypographyProps & {
    amount: number;
    currency: string;
  };

const getAmountColor = (amount: number) => {
  if (amount > 0) return 'var(--color-primary)';
  if (amount < 0) return 'var(--color-forthtiary)';
  return 'var(--color-black)';
};

const getAmountSign = (amount: number) => {
  if (amount > 0) return `+`;
  return ``;
};

const useStyles = makeStyles({
  currencyStyle: {
    color: 'var(--color-grey-light)',
  },
  amountStyle: {
    color: (props: SummaryAmountProps) => getAmountColor(props.amount),
  },
});

const SummaryAmount: React.FC<SummaryAmountProps> = ({ amount, currency }: SummaryAmountProps) => {
  const props = {
    amount,
    currency,
  };
  const { currencyStyle, amountStyle } = useStyles(props);

  return (
    <Box component="div">
      <Typography className={amountStyle} variant="h6" align="right">
        {getAmountSign(amount)}
        {formatNumber(amount)}
      </Typography>
      <Typography className={currencyStyle} variant="subtitle1" align="right">
        {currency}
      </Typography>
    </Box>
  );
};

export default SummaryAmount;
