import React from 'react';
import styled from 'styled-components';
import ExpensesCard, { ExpensesCardProps } from '../../components/organisms/ExpensesCard/ExpensesCard';

export type ExpensesProps = {
  expList: ExpensesCardProps[];
};

const SWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.5rem;
  justify-items: center;
`;

const renderExpenseCard = ({ company, amount, currency, isRefund, link, time, date }: ExpensesCardProps) => (
  <ExpensesCard
    key={time}
    company={company}
    amount={amount}
    currency={currency}
    isRefund={isRefund}
    link={link}
    time={time}
    date={date}
  />
);

const Expenses: React.FC<ExpensesProps> = ({ expList }) => (
  <SWrapper>{expList.map((el) => renderExpenseCard(el))}</SWrapper>
);

export default Expenses;
