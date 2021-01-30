import React, { useEffect, useState, useContext, useRef } from 'react';
import styled from 'styled-components';
import Chart from 'react-apexcharts';
import { DataContext } from '../../../contexts/DataContext';
import { AppContext } from '../../../contexts/AppContext';
import convertCurrency from '../../../utils/convertCurrency';
import getCurrencySymbol from '../../../utils/getCurrencySymbol';

const SWrapper = styled.div`
  grid-column: 1 / span 1;

  width: 100%;
  background-color: var(--color-white);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;

  @media only screen and (min-width: 75em) {
    grid-column: 1 / span 2;
  }
`;

const CategoriesChart: React.FC = () => {
  const app = useContext(AppContext);
  const transactionsList = useContext(DataContext).slice(0, 40);
  const [categories, setCategories] = useState<string[]>([]);
  const [series, setSeries] = useState<{}[]>([]);
  const [options, setOptions] = useState({
    chart: {
      type: 'pie',
      width: '100%',
    },
    title: {
      text: `Purchases in ${getCurrencySymbol(app.currency)} by category`,
      align: 'center',
    },
    labels: [] as string[],
    legend: {
      show: false,
    },
  });

  const isActive = useRef(true);
  useEffect(() => {
    const newCategories: string[] = [];

    if (transactionsList.length) {
      transactionsList.forEach((cur) => {
        if (!newCategories.includes(cur.category)) {
          newCategories.push(cur.category);
        }
      });

      if (isActive.current) {
        setCategories(newCategories);
        setOptions({ ...options, labels: newCategories });
      }
    }

    return () => {
      isActive.current = false;
    };
  }, [transactionsList]);

  useEffect(() => {
    if (categories) {
      const newCategories: { [category: string]: number } = {};
      categories.forEach((cur) => {
        newCategories[cur] = 0;
      });
      transactionsList.forEach((cur) => {
        newCategories[cur.category] += convertCurrency(
          parseFloat(cur.amount),
          cur.currency,
          app.currency,
          app.currencyRates
        );
      });
      const purchases: number[] = categories.map((cur) => newCategories[cur]);
      setSeries(purchases);
    }
  }, [categories]);

  return (
    <SWrapper>
      <div id="chart">
        <Chart options={{ ...options }} series={series} type="pie" />
      </div>
    </SWrapper>
  );
};

export default CategoriesChart;
