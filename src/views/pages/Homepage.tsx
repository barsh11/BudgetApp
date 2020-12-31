import React, { Suspense, useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserDispatchContext, initialUserContext } from '../../contexts/UserContext';
import user from '../../mock/user.json';
import Layout from '../layout/Layout';
import Loader from '../../components/atoms/Loader/Loader';

const TransactionsList = React.lazy(() => import('./TransactionsList/TransactionsList'));
const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'));

const Homepage: React.FC = () => {
  const setData = useContext(UserDispatchContext);

  useEffect(() => {
    let isActive = true;

    const userData = { ...user };
    if (userData) {
      setData({
        firstName: userData.first_name,
        lastName: userData.last_name,
        email: userData.email,
        avatar: userData.avatar,
        currentBalance: userData.current_balance,
        currentBalanceCurrency: userData.current_balance_currency,
        creditCard: {
          expYear: userData.credit_card.exp_year,
          expMonth: userData.credit_card.exp_month,
          last4Digits: userData.credit_card.last4Digits,
        },
      });
    } else if (isActive) {
      setData(initialUserContext);
    }

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/transactions" component={TransactionsList} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Suspense>
    </Layout>
  );
};
export default Homepage;
