import React, { useContext } from 'react';
import CreditCard from '../../../components/molecules/CreditCard/CreditCard';
import { UserContext } from '../../../contexts/UserContext';
import { AppContext } from '../../../contexts/AppContext';
import { LoaderContext } from '../../../contexts/LoaderContext';
import { StatsContext } from '../../../contexts/StatsContext';
import SWrapper from '../MainStyle';
import GeneralLoader from '../../../components/organisms/GeneralLoader/GeneralLoader';
import DashboardTransactions from '../../../components/molecules/DashboardTransactions/DashboardTransactions';
import sumLastMonths from '../../../utils/sumLastMonths';
import IncomesChart from '../../../components/organisms/IncomesChart/IncomesChart';
import ActivitiesChart from '../../../components/organisms/ActivitiesChart/ActivitiesChart';

const Dashboard: React.FC = () => {
  const app = useContext(AppContext);
  const isLoading = useContext(LoaderContext);
  const user = useContext(UserContext);
  const stats = useContext(StatsContext);

  return (
    <SWrapper>
      {isLoading ? <GeneralLoader /> : null}
      <CreditCard
        last4={user.creditCard.last4Digits}
        cardDate={`${user.creditCard.expMonth}/${user.creditCard.expYear}`}
        cardName={`${user.firstName} ${user.lastName}`}
      />
      <IncomesChart />
      <DashboardTransactions type="expense" currency={app.currency} revenue={sumLastMonths(3, 'expenses', stats)} />
      <DashboardTransactions type="Income" currency={app.currency} revenue={sumLastMonths(3, 'incomes', stats)} />
      <ActivitiesChart location="dashboard" />
    </SWrapper>
  );
};

export default Dashboard;
