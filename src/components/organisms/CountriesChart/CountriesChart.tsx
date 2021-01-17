/* import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Chart from 'react-apexcharts';
import { DataContext } from '../../../contexts/DataContext';
import { AppContext } from '../../../contexts/AppContext';
import convertCurrency from '../../../utils/convertCurrency';
import getCurrencySymbol from '../../../utils/getCurrencySymbol';

const SWrapper = styled.div`
  grid-column: 1 / -1;
  justify-self: stretch;

  width: 100%;
  height: 100%;
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 37.5em) {
    max-width: 30rem;
    justify-self: center;
  }
`;

const CountriesChart: React.FC = () => {
  const app = useContext(AppContext);
  const transactionsList = useContext(DataContext);
  const [countries, setCountries] = useState<string[]>([]);
  const [series, setSeries] = useState<{ data: { x: string; y: number }[] }[]>([]);
  const [options] = useState({
    chart: {
      type: 'treemap',
      height: '100%',
    },
    title: {
      text: `Purchases in ${getCurrencySymbol(app.currency)} by conutry`,
    },
    legend: {
      show: false,
    },
  });

  useEffect(() => {
    let isActive = true;

    const newCountries: string[] = [];
    transactionsList.forEach((cur) => {
      if (!newCountries.includes(cur.location.country)) {
        newCountries.push(cur.location.country);
      }
    });

    if (isActive) {
      setCountries(newCountries);
    }

    return () => {
      isActive = false;
    };
  }, [transactionsList]);

  useEffect(() => {
    let isActive = true;

    if (countries.length) {
      const newCountries: { [country: string]: number } = {};
      countries.forEach((cur) => {
        newCountries[cur] = 0;
      });
      transactionsList.forEach((cur) => {
        newCountries[cur.location.country] += convertCurrency(
          parseFloat(cur.amount),
          cur.currency,
          app.currency,
          app.currencyRates
        );
      });
      const data: { x: string; y: number }[] = [];
      Object.keys(newCountries).forEach((cur) => {
        data.push({ x: cur, y: newCountries[cur] });
      });
      if (isActive) {
        setSeries([{ data: data.slice() }]);
      }
    }

    return () => {
      isActive = false;
    };
  }, [countries]);

  return (
    <SWrapper>
      <div id="chart">
        <Chart options={{ ...options }} series={series.slice()} type="treemap" />
      </div>
    </SWrapper>
  );
};

export default CountriesChart; */

export {};
