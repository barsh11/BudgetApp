import React from 'react';
import styled from 'styled-components';
import ActivitiesChart from '../../../components/organisms/ActivitiesChart/ActivitiesChart';
import CategoriesChart from '../../../components/organisms/CategoriesChart/CategoriesChart';
import ExpensesChart from '../../../components/organisms/ExpensesChart/ExpensesChart';
/* import CountriesChart from '../../../components/organisms/CountriesChart/CountriesChart'; */
import MethodsChart from '../../../components/organisms/MethodsChart/MethodsChart';

const SWrapper = styled.div`
  display: grid;
  grid-template-rows: 2fr 3fr;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.7rem;

  height: 100%;
  margin: 0 auto;
  overflow-y: hidden;

  &:focus,
  &:active,
  &:hover {
    overflow-y: scroll;
  }

  @media only screen and (max-width: 37.5em) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (min-width: 75em) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 2fr 2fr 3fr;
  }
`;

const SActivitiesChart = styled(ActivitiesChart)`
  @media screen and (max-width: 75em) {
    display: none !important;
  }
`;

const Charts: React.FC = () => (
  <SWrapper>
    <CategoriesChart />
    <MethodsChart />
    <ExpensesChart />
    <SActivitiesChart location="charts" />
  </SWrapper>
);

export default Charts;
