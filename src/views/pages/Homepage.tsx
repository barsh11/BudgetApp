import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout, { LayoutProps } from '../layout/Layout';
import Loader from '../../components/atoms/Loader/Loader';

const TransactionsList = React.lazy(() => import('./TransactionsList/TransactionsList'));
const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'));

type HomepageProps = LayoutProps;

const Homepage: React.FC<HomepageProps> = ({ sidebarData, summaryData }) => (
  <Layout sidebarData={sidebarData} summaryData={summaryData}>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/transactions" component={TransactionsList} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </Suspense>
  </Layout>
);
export default Homepage;
