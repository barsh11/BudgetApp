import React, { Suspense } from 'react';
import styled from 'styled-components';
import SummaryLabel from '../../atoms/SummaryLabel/SummaryLabel';
import SummaryAmount from '../../atoms/SummaryAmount/SummaryAmount';
import FallbackIcon from '../../atoms/FallbackIcon/FallbackIcon';

const CancelledIcon = React.lazy(() => import('../../atoms/CancelledIcon/CancelledIcon'));
const ExpenseIcon = React.lazy(() => import('../../atoms/ExpenseIcon/ExpenseIcon'));
const IncomeIcon = React.lazy(() => import('../../atoms/IncomeIcon/IncomeIcon'));
const PaypalIcon = React.lazy(() => import('../../atoms/PaypalIcon/PaypalIcon'));

type SummaryItemProps = {
  isCancelled?: boolean;
  company?: string;
  date: string;
  amount: number;
  currency: string;
  type: 'expense' | 'income' | 'cancel';
  isPaypal?: boolean;
};

const SWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 20%;
`;

const SLeftWrapper = styled.div`
  display: flex;
  flex-direction: cloumn;
  align-items: center;
`;

const getItemIcon = (type: 'expense' | 'income' | 'cancel', isPaypal?: boolean) => {
  switch (type) {
    case 'expense':
      return isPaypal ? <PaypalIcon /> : <ExpenseIcon />;
    case 'income':
      return isPaypal ? <PaypalIcon /> : <IncomeIcon />;
    default:
      return <CancelledIcon />;
  }
};

const SummaryItem: React.FC<SummaryItemProps> = ({
  isCancelled,
  company,
  date,
  amount,
  currency,
  type,
  isPaypal = false,
}) => {
  const icon = getItemIcon(type, isPaypal);

  return (
    <SWrapper>
      <SLeftWrapper>
        <Suspense fallback={<FallbackIcon />}>{icon}</Suspense>
        <SummaryLabel isCancelled={isCancelled} company={company} date={date} />
      </SLeftWrapper>
      <SummaryAmount amount={amount} currency={currency} />
    </SWrapper>
  );
};

export default SummaryItem;
