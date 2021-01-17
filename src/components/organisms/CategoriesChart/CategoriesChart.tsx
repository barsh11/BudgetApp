import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Chart from 'react-apexcharts';
import { DataContext } from '../../../contexts/DataContext';
import { AppContext } from '../../../contexts/AppContext';
import convertCurrency from '../../../utils/convertCurrency';
import getCurrencySymbol from '../../../utils/getCurrencySymbol';

const SWrapper = styled.div``;

const ActivitiesChart: React.FC = () => {
  const app = useContext(AppContext);
  const transactionsList = useContext(DataContext);
  const [categories, setCategories] = useState<string[]>([]);
  const [series, setSeries] = useState<{}[]>([]);
  const [options, setOptions] = useState({
    chart: {
      type: 'pie',
      width: '100%',
    },
    title: {
      text: `Purchases in ${getCurrencySymbol(app.currency)} by category`,
    },
    labels: [] as string[],
    legend: {
      show: false,
    },
  });

  useEffect(() => {
    let isActive = true;

    const newCategories: string[] = [];
    transactionsList.forEach((cur) => {
      if (!newCategories.includes(cur.category)) {
        newCategories.push(cur.category);
      }
    });

    if (isActive) {
      setCategories(newCategories);
      setOptions({ ...options, labels: newCategories });
    }

    return () => {
      isActive = false;
    };
  }, [transactionsList]);

  useEffect(() => {
    let isActive = true;

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
      if (isActive) {
        setSeries(purchases);
      }
    }

    return () => {
      isActive = false;
    };
  }, [categories]);

  return (
    <SWrapper>
      <div id="chart">
        <Chart options={{ ...options }} series={series} type="pie" />
      </div>
    </SWrapper>
  );
};

export default ActivitiesChart;