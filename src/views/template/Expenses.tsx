import React from 'react';
import styled from 'styled-components';
import ExpensesCard, { ExpensesCardProps } from '../../components/organisms/ExpensesCard/ExpensesCard';

export type ExpensesProps = {
  expList: ExpensesCardProps[];
};

const SWrapper = styled.div`
  background-color: var(--color-white-dark);
  border-radius: 2rem 0 0 2rem;
  margin-left: -2rem;
  padding: 3.2rem;

  height: 68.2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
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
