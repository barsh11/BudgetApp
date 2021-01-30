/* eslint-disable camelcase */
import React, { Suspense, useContext, useEffect, useCallback, useRef } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { UserDispatchContext } from '../../contexts/UserContext';
import { StatsContext } from '../../contexts/StatsContext';
import { LoaderContext } from '../../contexts/LoaderContext';
import { AppDispatchContext, AppContext } from '../../contexts/AppContext';
import useData from '../../hooks/useData';
import Layout from '../layout/Layout';
import GeneralLoader from '../../components/organisms/GeneralLoader/GeneralLoader';
import useStats from '../../hooks/useStats';
import Loader from '../../components/atoms/Loader/Loader';
import { axiosCurrency, axiosUser } from '../../services/axios';
import { DataContext } from '../../contexts/DataContext';

const TransactionsList = React.lazy(() => import('./TransactionsList/TransactionsList'));
const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'));
const SingleTransaction = React.lazy(() => import('./SingleTransaction/SingleTransaction'));
const CategoriesList = React.lazy(() => import('./CategoriesList/CategoriesList'));
const Charts = React.lazy(() => import('./Charts/Charts'));
const UserProfile = React.lazy(() => import('./UserProfile/UserProfile'));

const Homepage: React.FC = () => {
  const app = useContext(AppContext);
  const transactionsList = useContext(DataContext);
  const statsList = useContext(StatsContext);
  const setApp = useContext(AppDispatchContext);
  const setUser = useContext(UserDispatchContext);
  const isLoading = useContext(LoaderContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dataList = useData();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const stats = useStats();

  const getUser = useCallback(async (isActive: boolean) => {
    try {
      const res = await axiosUser.get('');
      const newUser = res.data.slice()[0];

      if (isActive) {
        setUser({
          firstName: newUser.first_name,
          lastName: newUser.last_name,
          email: newUser.email,
          avatar: newUser.avatar,
          currentBalance: newUser.current_balance,
          currentBalanceCurrency: newUser.current_balance_currency,
          creditCard: {
            expYear: newUser.credit_card.exp_year,
            expMonth: newUser.credit_card.exp_month,
            last4Digits: newUser.credit_card.last4Digits,
          },
        });
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }, []);

  const getCurrRates = useCallback(async (isActive: boolean) => {
    try {
      const res = await axiosCurrency.get('');
      const newRates = { ...res.data.rates };
      const newApp = { ...app };

      if (isActive) {
        setApp({ ...newApp, currencyRates: newRates });
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }, []);

  const isActive = useRef(true);
  useEffect(() => {
    const fetchData = async () => {
      await getCurrRates(isActive.current);
      await getUser(isActive.current);
    };

    fetchData();
    return () => {
      isActive.current = false;
    };
  }, []);

  return (
    <>
      {isLoading ? <GeneralLoader /> : null}
      <Layout>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/transactions" exact component={TransactionsList} />
            <Route path="/transactions/:transactionId" component={SingleTransaction} />
            <Route path="/user-profile" component={UserProfile} />
            <Route path="/charts" component={statsList.size && transactionsList.length ? Charts : GeneralLoader} />
            <Route path="/categories" component={CategoriesList} />
            <Route
              path="/dashboard"
              exact
              component={statsList.size && transactionsList.length ? Dashboard : GeneralLoader}
            />
            <Redirect to="/dashboard" />
          </Switch>
        </Suspense>
      </Layout>
    </>
  );
};

export default Homepage;
