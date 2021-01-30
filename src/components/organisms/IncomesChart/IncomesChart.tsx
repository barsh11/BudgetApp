import React, { useEffect, useState, useCallback, useContext, useRef } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Typography } from '@material-ui/core';
import Chart from 'react-apexcharts';
import { AppContext } from '../../../contexts/AppContext';
import { DataContext } from '../../../contexts/DataContext';
import convertCurrency from '../../../utils/convertCurrency';
import getCurrencySymbol from '../../../utils/getCurrencySymbol';

const SWrapper = styled.div`
  justify-self: stretch;

  width: 100%;
  height: 100%;
  max-width: 30rem;
  max-height: 18rem;
  background-color: var(--color-white);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 37.5em) {
    justify-self: center;
  }
`;

const IncomesChart: React.FC = () => {
  const app = useContext(AppContext);
  const transactionsList = useContext(DataContext);
  const [incomes, setIncomes] = useState<Map<string, number>>(new Map());
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
      const incomesDaily: Map<string, number> = new Map();

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
            transactionsList[i].transactionType === 'Income'
          ) {
            if (incomesDaily.get(dateStr) === undefined) {
              incomesDaily.set(
                dateStr,
                convertCurrency(
                  parseFloat(transactionsList[i].amount),
                  transactionsList[i].currency,
                  app.currency,
                  app.currencyRates
                )
              );
            } else {
              incomesDaily.set(
                dateStr,
                incomesDaily.get(dateStr)! +
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
          setIncomes(incomesDaily);
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
    if (incomes.size) {
      let dates = Array.from(incomes.keys());
      dates = dates.sort((a, b) => moment(a, 'DD/MM/YY').diff(moment(b, 'DD/MM/YY')));
      const newIncomes = dates.map((cur) => incomes.get(cur)!);

      setSeries([
        {
          name: 'Incomes',
          data: newIncomes.map((cur) => cur.toFixed(2)),
        },
      ]);
      const xaxisLab: string[] = dates.slice();
      setOptions({ ...options, xaxis: { ...options.xaxis, categories: xaxisLab } });
    }
  }, [incomes]);

  return (
    <SWrapper>
      <Typography variant="h5" color="textSecondary">
        Incomes
      </Typography>
      <div id="chart">
        <Chart options={{ ...options }} series={series.slice()} type="area" />
      </div>
    </SWrapper>
  );
};

export default IncomesChart;
