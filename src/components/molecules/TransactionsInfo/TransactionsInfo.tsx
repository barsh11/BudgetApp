import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import TransactionsAmount, { TransactionsAmountProps } from '../../atoms/TransactionAmount/TransactionsAmount';

export type TransactionsInfoProps = TypographyProps &
  TransactionsAmountProps & {
    type: 'Income' | 'expense' | 'cancelled';
  };

const SWrapper = styled.div`
  display: flex;

  width: 100%;
`;

const SInfoWrapper = styled.div`
  width: 13rem;
  height: 8rem;

  display: flex;
  flex-direction: column;

  background-color: var(--color-white);
  padding: 0.8rem;
  margin: 0.8rem;
  border-radius: 0.4rem;
  box-shadow: var(--shadow-light);
`;

const useStyles = makeStyles((theme) => ({
  titleStyle: {
    marginBottom: '0.5rem',
    color: theme.palette.grey.A100,
  },
}));

const TransactionsInfo: React.FC<TransactionsInfoProps> = ({ amount, currency, isRefund, type }) => {
  const classes = useStyles();

  return (
    <SWrapper>
      <SInfoWrapper>
        <Typography className={classes.titleStyle} variant="subtitle2">
          Amount
        </Typography>
        <TransactionsAmount amount={amount} currency={currency} isRefund={isRefund} />
      </SInfoWrapper>
      <SInfoWrapper>
        <Typography className={classes.titleStyle} variant="subtitle2">
          Transaction
        </Typography>
        <Typography variant="h6">{type.toUpperCase()}</Typography>
      </SInfoWrapper>
    </SWrapper>
  );
};

export default TransactionsInfo;
