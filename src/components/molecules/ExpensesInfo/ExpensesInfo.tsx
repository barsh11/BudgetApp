import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import ReceiptIcon, { ReceiptIconProps } from '../../atoms/ReceiptIcon/ReceiptIcon';
import ExpensesAmount, { ExpensesAmountProps } from '../../atoms/ExpensesAmount/ExpensesAmount';

export type ExpensesInfoProps = TypographyProps & ExpensesAmountProps & ReceiptIconProps;

const SWrapper = styled.div`
  display: flex;

  width: 100%;
`;

const SInfoWrapper = styled.div`
  width: 13rem;
  height: 7rem;

  display: flex;
  flex-direction: column;

  background-color: var(--color-white);
  padding: 0.8rem;
  margin: 0.8rem;
  border-radius: 0.4rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const useStyles = makeStyles((theme) => ({
  titleStyle: {
    marginBottom: '0.5rem',
    color: theme.palette.grey.A100,
  },
}));

const ExpensesInfo: React.FC<ExpensesInfoProps> = ({ amount, currency, isRefund, link }) => {
  const classes = useStyles();

  return (
    <SWrapper>
      <SInfoWrapper>
        <Typography className={classes.titleStyle} variant="subtitle2">
          Amount
        </Typography>
        <ExpensesAmount amount={amount} currency={currency} isRefund={isRefund} />
      </SInfoWrapper>
      <SInfoWrapper>
        <Typography className={classes.titleStyle} variant="subtitle2">
          Receipt
        </Typography>
        <ReceiptIcon link={link} />
      </SInfoWrapper>
    </SWrapper>
  );
};

export default ExpensesInfo;
