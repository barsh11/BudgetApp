import React, { Suspense } from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import FallbackIcon from '../../atoms/FallbackIcon/FallbackIcon';
import capitalize from '../../../utils/capitalize';
import getCurrencySymbol from '../../../utils/getCurrencySymbol';
import formatNumber from '../../../utils/formatNumber';

const ExpenseIcon = React.lazy(() => import('../../atoms/ExpenseIcon/ExpenseIcon'));
const IncomeIcon = React.lazy(() => import('../../atoms/IncomeIcon/IncomeIcon'));

type DashboardTransactionsProps = TypographyProps & {
  type: 'expense' | 'Income';
  revenue: number | undefined;
  currency: string;
};

const useStyle = makeStyles((theme) => ({
  titleStyle: {
    marginBottom: '3rem',
  },
  expenseStyle: {
    color: 'var(--color-forthtiary)',
  },
  incomeStyle: {
    color: theme.palette.primary.main,
  },
  revenueStyle: {
    color: theme.palette.grey.A100,
  },
  iconStyle: {
    borderRadius: '50%',
    padding: '0.3rem',
    backgroundColor: (type) => (type === 'expense' ? 'var(--color-forthtiary)' : theme.palette.primary.main),
    fill: theme.palette.grey.A200,
  },
}));

const SWrapper = styled.div`
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  width: 100%;
  height: 100%;
  max-width: 30rem;
  max-height: 15rem;

  align-self: center;
`;

const SBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DashboardTransactions: React.FC<DashboardTransactionsProps> = ({ type, revenue, currency }) => {
  const classes = useStyle({ type });
  const deposit = `${getCurrencySymbol(currency)}${revenue && formatNumber(revenue)}`;

  return (
    <SWrapper>
      <Typography className={classes.titleStyle} variant="h5" color="textSecondary">
        {`${capitalize(type)}s`}
      </Typography>
      <Typography className={classes.revenueStyle} variant="subtitle1">
        Revenue
      </Typography>
      <SBottomWrapper>
        <Typography
          className={type === 'expense' ? classes.expenseStyle : classes.incomeStyle}
          variant="h3"
          align="left"
        >
          {deposit}
        </Typography>
        <Suspense fallback={<FallbackIcon location="dashboard" />}>
          {type === 'expense' ? <ExpenseIcon location="dashboard" /> : <IncomeIcon />}
        </Suspense>
      </SBottomWrapper>
    </SWrapper>
  );
};

export default DashboardTransactions;
