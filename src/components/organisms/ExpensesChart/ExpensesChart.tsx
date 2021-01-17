import React, { useEffect, useState, useCallback, useContext } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Chart from 'react-apexcharts';
import { LoaderDispatchContext } from '../../../contexts/LoaderContext';
import { AppContext } from '../../../contexts/AppContext';
import { firstDate } from '../../../hooks/useStats';
import datamock from '../../../mock/data-mock.json';
import convertCurrency from '../../../utils/convertCurrency';
import getCurrencySymbol from '../../../utils/getCurrencySymbol';

const SWrapper = styled.div``;

const ExpensesChart: React.FC = () => {
  const setLoading = useContext(LoaderDispatchContext);
  const app = useContext(AppContext);
  const [expenses, setExpenses] = useState<Map<string, number>>(new Map());
  const lastDate = moment(firstDate.toDate(), 'MM/DD/YYYY').subtract(1, 'months');
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
      setLoading(true);
      const expensesDaily: Map<string, number> = new Map();
      if (datamock instanceof Array) {
        let i: number = 0;

        for (i; i < datamock.length; i += 1) {
          const currDate = moment(datamock[i].date, 'MM/DD/YYYY');
          const dateStr = currDate.format('DD/MM/YY');
          if (currDate.isAfter(lastDate) && currDate.isBefore(firstDate) && datamock[i].transactionType === 'expense') {
            if (expensesDaily.get(dateStr) === undefined) {
              expensesDaily.set(
                dateStr,
                convertCurrency(parseFloat(datamock[i].amount), datamock[i].currency, app.currency, app.currencyRates)
              );
            } else {
              expensesDaily.set(
                dateStr,
                expensesDaily.get(dateStr)! +
                  convertCurrency(parseFloat(datamock[i].amount), datamock[i].currency, app.currency, app.currencyRates)
              );
            }
          }
          if (isActive) {
            setExpenses(expensesDaily);
          }
        }
      }
      setLoading(false);
    },
    [datamock]
  );

  useEffect(() => {
    let isActive = true;

    getState(isActive);

    return () => {
      isActive = false;
    };
  }, [getState]);

  useEffect(() => {
    let isActive = true;

    if (expenses.size > 28) {
      let dates = Array.from(expenses.keys());
      dates = dates.sort((a, b) => moment(a, 'DD/MM/YY').diff(moment(b, 'DD/MM/YY')));
      const newExpenses = dates.map((cur) => expenses.get(cur)!);
      if (isActive) {
        setSeries([
          {
            name: 'Expenses',
            data: newExpenses.map((cur) => cur.toFixed(2)),
          },
        ]);
        const xaxisLab: string[] = dates.slice();
        setOptions({ ...options, xaxis: { ...options.xaxis, categories: xaxisLab } });
      }
    }

    return () => {
      isActive = false;
    };
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
