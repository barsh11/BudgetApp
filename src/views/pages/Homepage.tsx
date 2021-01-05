import React, { Suspense, useContext, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { UserDispatchContext } from '../../contexts/UserContext';
import { DataDispatchContext } from '../../contexts/DataContext';
import usermock from '../../mock/user-mock.json';
import Layout from '../layout/Layout';
import Loader from '../../components/atoms/Loader/Loader';
import useData from '../../hooks/useData';

const TransactionsList = React.lazy(() => import('./TransactionsList/TransactionsList'));
const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'));
const SingleTransaction = React.lazy(() => import('./SingleTransaction/SingleTransaction'));

const Homepage: React.FC = () => {
  const setUser = useContext(UserDispatchContext);
  const setData = useContext(DataDispatchContext);
  const dataList = useData();
  const user = { ...usermock };

  useEffect(() => {
    if (user) {
      setUser({
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        avatar: user.avatar,
        currentBalance: user.current_balance,
        currentBalanceCurrency: user.current_balance_currency,
        creditCard: {
          expYear: user.credit_card.exp_year,
          expMonth: user.credit_card.exp_month,
          last4Digits: user.credit_card.last4Digits,
        },
      });
    }
  }, [user]);

  useEffect(() => {
    if (dataList) {
      setData(dataList.slice());
    }
  }, [dataList]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/transactions" exact component={dataList.length ? TransactionsList : Loader} />
          <Route path="/transactions/:transactionId" component={SingleTransaction} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    </Layout>
  );
};
export default Homepage;
