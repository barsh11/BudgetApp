import React from 'react';
import styled from 'styled-components';
import CategoriesChart from '../../../components/organisms/CategoriesChart/CategoriesChart';
import ExpensesChart from '../../../components/organisms/ExpensesChart/ExpensesChart';
/* import CountriesChart from '../../../components/organisms/CountriesChart/CountriesChart'; */

const SWrapper = styled.div``;

const Charts: React.FC = () => (
  <SWrapper>
    <ExpensesChart />
    {/* <CountriesChart /> */}
    <CategoriesChart />
  </SWrapper>
);

export default Charts;
