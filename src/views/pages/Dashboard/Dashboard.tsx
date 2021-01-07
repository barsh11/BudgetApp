import React, { useContext } from 'react';
import CreditCard from '../../../components/molecules/CreditCard/CreditCard';
import { UserContext } from '../../../contexts/UserContext';
import SWrapper from '../MainStyle';
import DashboardTransactions from '../../../components/molecules/DashboardTransactions/DashboardTransactions';

const Dashboard: React.FC = () => {
  const user = useContext(UserContext);

  return (
    <SWrapper>
      <CreditCard
        last4={user.creditCard.last4Digits}
        cardDate={`${user.creditCard.expMonth}/${user.creditCard.expYear}`}
        cardName={`${user.firstName} ${user.lastName}`}
      />
      <div />
      <DashboardTransactions type="expense" currency="USD" revenue={90524} />
      <DashboardTransactions type="Income" currency="USD" revenue={60228} />
    </SWrapper>
  );
};

export default Dashboard;
