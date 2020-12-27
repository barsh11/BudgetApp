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

const renderExpenseCard = (card: ExpensesCardProps) => (
  <ExpensesCard
    key={card.time}
    company={card.company}
    amount={card.amount}
    currency={card.currency}
    isRefund={card.isRefund}
    link={card.link}
    time={card.time}
    date={card.date}
  />
);

const Expenses: React.FC<ExpensesProps> = (props) => {
  const { expList } = props;
  return <SWrapper>{expList.map((el) => renderExpenseCard(el))}</SWrapper>;
};

export default Expenses;
