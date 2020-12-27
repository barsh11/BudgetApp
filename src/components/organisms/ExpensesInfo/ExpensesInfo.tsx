import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import ReceiptIcon from '../../atoms/ReceiptIcon/ReceiptIcon';
import ExpensesAmount from '../../atoms/ExpensesAmount/ExpensesAmount';

type ExpensesInfoProps = TypographyProps & {
  data: {
    amount: number;
    currency: string;
    isRefund?: boolean;
    link: string;
  };
};

const SWrapper = styled.div`
  display: flex;
`;

const SInfoWrapper = styled.div`
  width: 13rem;
  height: 8rem;

  display: flex;
  flex-direction: column;

  background-color: var(--color-white);
  padding: 0.8rem;
  margin: 3rem;
  border-radius: 4px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const useStyles = makeStyles({
  titleStyle: {
    marginBottom: '0.8rem',
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
        <Typography variant="subtitle2">Receipt</Typography>
        <ReceiptIcon link={data.link} />
      </SInfoWrapper>
    </SWrapper>
  );
};

export default ExpensesInfo;
