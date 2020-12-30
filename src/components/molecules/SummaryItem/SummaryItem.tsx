import React, { Suspense } from 'react';
import styled from 'styled-components';
import SummaryLabel from '../../atoms/SummaryLabel/SummaryLabel';
import SummaryAmount from '../../atoms/SummaryAmount/SummaryAmount';
import FallbackIcon from '../../atoms/FallbackIcon/FallbackIcon';
import capitalize from '../../../utils/capitalize';

const CancelledIcon = React.lazy(() => import('../../atoms/CancelledIcon/CancelledIcon'));
const ExpenseIcon = React.lazy(() => import('../../atoms/ExpenseIcon/ExpenseIcon'));
const IncomeIcon = React.lazy(() => import('../../atoms/IncomeIcon/IncomeIcon'));
const PaypalIcon = React.lazy(() => import('../../atoms/PaypalIcon/PaypalIcon'));

export type SummaryItemProps = {
  company: string;
  date: string;
  amount: number;
  currency: string;
  type: 'expense' | 'Income' | 'cancelled';
  isPaypal?: boolean;
};

const SWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 3rem;
`;

const SLeftWrapper = styled.div`
  display: flex;
  flex-direction: cloumn;
  align-items: center;
`;

const getItemIcon = (type: 'expense' | 'Income' | 'cancelled', isPaypal?: boolean) => {
  switch (type) {
    case 'expense':
      return isPaypal ? <PaypalIcon /> : <ExpenseIcon />;
    case 'Income':
      return isPaypal ? <PaypalIcon /> : <IncomeIcon />;
    default:
      return <CancelledIcon />;
  }
};

const SummaryItem: React.FC<SummaryItemProps> = ({ company, date, amount, currency, type, isPaypal }) => {
  const icon = getItemIcon(type, isPaypal);

  return (
    <SWrapper>
      <SLeftWrapper>
        <Suspense fallback={<FallbackIcon location="summary" />}>{icon}</Suspense>
        <SummaryLabel isCancelled={type === 'cancelled'} company={capitalize(company)} date={date} />
      </SLeftWrapper>
      <SummaryAmount amount={amount} currency={currency} type={type} />
    </SWrapper>
  );
};

export default SummaryItem;
