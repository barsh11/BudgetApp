import React, { Suspense, useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserDispatchContext, initialUserContext } from '../../contexts/UserContext';
import usermock from '../../mock/user-mock.json';
import Layout from '../layout/Layout';
import Loader from '../../components/atoms/Loader/Loader';
import useData from '../../hooks/useData';
import { DataDispatchContext } from '../../contexts/DataContext';

const TransactionsList = React.lazy(() => import('./TransactionsList/TransactionsList'));
const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'));

const Homepage: React.FC = () => {
  const setUser = useContext(UserDispatchContext);
  const setData = useContext(DataDispatchContext);
  const dataList = useData();

  useEffect(() => {
    let isActive = true;

    const user = { ...usermock };
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
    } else if (isActive) {
      setUser(initialUserContext);
    }

    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    let isActive = true;

    if (dataList) {
      setData(dataList.slice());
    } else if (isActive) {
      setData([]);
    }

    return () => {
      isActive = false;
    };
  }, [dataList]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Switch>
          {dataList.length ? <Route path="/transactions" component={TransactionsList} /> : <Loader />}
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Suspense>
    </Layout>
  );
};
export default Homepage;
