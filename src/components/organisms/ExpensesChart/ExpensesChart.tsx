import React, { useEffect, useState, useCallback, useContext, useRef } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Chart from 'react-apexcharts';
import { AppContext } from '../../../contexts/AppContext';
import { DataContext } from '../../../contexts/DataContext';
import convertCurrency from '../../../utils/convertCurrency';
import getCurrencySymbol from '../../../utils/getCurrencySymbol';

const SWrapper = styled.div`
  grid-column: 1 / -1;
  justify-self: stretch;
  align-self: center;

  width: 100%;
  background-color: var(--color-white);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  @media only screen and (min-width: 75em) {
    grid-column: 1 / span 2;
    grid-row: 2 / span 1;
    align-self: stretch;
  }
`;

const ExpensesChart: React.FC = () => {
  const app = useContext(AppContext);
  const transactionsList = useContext(DataContext);
  const [expenses, setExpenses] = useState<Map<string, number>>(new Map());
  const [series, setSeries] = useState<{}[]>([]);
  const [options, setOptions] = useState({
    chart: {
      type: 'area',
      height: '100%',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
    },
    title: {
      text: `Last month expenses`,
      align: 'center',
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    xaxis: {
      categories: [] as string[],
    },
    yaxis: {
      title: {
        text: `${getCurrencySymbol(app.currency)}`,
        categories: [],
      },
      min: 0,
    },
    fill: {
      opacity: 1,
    },
    colors: ['#3A2D96'],
  });

  const getState = useCallback(
    (isActive: boolean) => {
      const expensesDaily: Map<string, number> = new Map();

      if (transactionsList.length) {
        const firstDate = moment(transactionsList[0].date, 'MM/DD/YYYY');
        const lastDate = moment(firstDate.toDate(), 'MM/DD/YYYY').subtract(1, 'months');
        let i: number = 0;

        for (i; i < transactionsList.length; i += 1) {
          const currDate = moment(transactionsList[i].date, 'MM/DD/YYYY');
          const dateStr = currDate.format('DD/MM/YY');
          if (
            currDate.isAfter(lastDate) &&
            currDate.isBefore(firstDate) &&
            transactionsList[i].transactionType === 'expense'
          ) {
            if (expensesDaily.get(dateStr) === undefined) {
              expensesDaily.set(
                dateStr,
                convertCurrency(
                  parseFloat(transactionsList[i].amount),
                  transactionsList[i].currency,
                  app.currency,
                  app.currencyRates
                )
              );
            } else {
              expensesDaily.set(
                dateStr,
                expensesDaily.get(dateStr)! +
                  convertCurrency(
                    parseFloat(transactionsList[i].amount),
                    transactionsList[i].currency,
                    app.currency,
                    app.currencyRates
                  )
              );
            }
          }
        }
        if (isActive) {
          setExpenses(expensesDaily);
        }
      }
    },
    [transactionsList]
  );

  const isActive = useRef(true);
  useEffect(() => {
    getState(isActive.current);

    return () => {
      isActive.current = false;
    };
  }, [getState]);

  useEffect(() => {
    if (expenses.size) {
      let dates = Array.from(expenses.keys());
      dates = dates.sort((a, b) => moment(a, 'DD/MM/YY').diff(moment(b, 'DD/MM/YY')));
      const newExpenses = dates.map((cur) => expenses.get(cur)!);

      setSeries([
        {
          name: 'Expenses',
          data: newExpenses.map((cur) => cur.toFixed(2)),
        },
      ]);
      const xaxisLab: string[] = dates.slice();
      setOptions({ ...options, xaxis: { ...options.xaxis, categories: xaxisLab } });
    }
  }, [expenses]);

  return (
    <SWrapper>
      <div id="chart">
        <Chart options={{ ...options }} series={series.slice()} type="area" />
      </div>
    </SWrapper>
  );
};

export default ExpensesChart;
