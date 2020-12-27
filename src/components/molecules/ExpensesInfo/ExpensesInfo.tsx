import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import ReceiptIcon from '../../atoms/ReceiptIcon/ReceiptIcon';
import ExpensesAmount from '../../atoms/ExpensesAmount/ExpensesAmount';

export type ExpensesInfoProps = TypographyProps & {
  data: {
    amount: number;
    currency: string;
    isRefund?: boolean;
    link: string;
  };
};

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

const useStyles = makeStyles({
  titleStyle: {
    marginBottom: '0.5rem',
    color: 'var(--color-grey-light)',
  },
});

const ExpensesInfo: React.FC<ExpensesInfoProps> = (props) => {
  const classes = useStyles();
  const { data } = props;

  return (
    <SWrapper>
      <SInfoWrapper>
        <Typography className={classes.titleStyle} variant="subtitle2">
          Amount
        </Typography>
        <ExpensesAmount amount={data.amount} currency={data.currency} isRefund={data.isRefund} />
      </SInfoWrapper>
      <SInfoWrapper>
        <Typography className={classes.titleStyle} variant="subtitle2">
          Receipt
        </Typography>
        <ReceiptIcon link={data.link} />
      </SInfoWrapper>
    </SWrapper>
  );
};

export default ExpensesInfo;
