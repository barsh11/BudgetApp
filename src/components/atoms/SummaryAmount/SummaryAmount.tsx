import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import Box, { BoxProps } from '@material-ui/core/Box';
import formatNumber from '../../../utils/formatNumber';

type SummaryAmountProps = BoxProps &
  TypographyProps & {
    amount: number;
    currency: string;
    type: 'expense' | 'Income' | 'cancelled';
  };

const getAmountColor = (type: string) => {
  switch (type) {
    case 'Income':
      return 'var(--color-primary)';
    case 'expense':
      return 'var(--color-forthtiary)';
    default:
      return 'var(--color-black)';
  }
};

const getAmountSign = (type: string) => {
  switch (type) {
    case 'expense':
      return '-';
    default:
      return '+';
  }
};

const useStyles = makeStyles((theme) => ({
  currencyStyle: {
    color: theme.palette.grey.A100,
  },
  amountStyle: {
    color: (props: SummaryAmountProps) => getAmountColor(props.type),
  },
}));

const SummaryAmount: React.FC<SummaryAmountProps> = ({ amount, currency, type }: SummaryAmountProps) => {
  const props = {
    amount,
    currency,
    type,
  };
  const { currencyStyle, amountStyle } = useStyles(props);

  return (
    <Box component="div">
      <Typography className={amountStyle} variant="h6" align="right">
        {getAmountSign(type)}
        {formatNumber(amount)}
      </Typography>
      <Typography className={currencyStyle} variant="subtitle1" align="right">
        {currency}
      </Typography>
    </Box>
  );
};

export default SummaryAmount;
