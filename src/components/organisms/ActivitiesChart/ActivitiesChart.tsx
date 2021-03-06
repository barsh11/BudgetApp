import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Typography } from '@material-ui/core';
import Chart from 'react-apexcharts';
import { StatsContext } from '../../../contexts/StatsContext';
import { AppContext } from '../../../contexts/AppContext';
import { DataContext } from '../../../contexts/DataContext';
import sumSpecMonth from '../../../utils/sumSpecMonth';
import getCurrencySymbol from '../../../utils/getCurrencySymbol';

const SWrapper = styled.div`
  grid-column: 1 / -1;
  justify-self: stretch;
  align-self: center;

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
    display: none;
  }
`;

const ActivitiesChart: React.FC<{ className?: string; location: 'charts' | 'dashboard' }> = ({
  className,
  location,
}) => {
  const stats = useContext(StatsContext);
  const app = useContext(AppContext);
  const transactionsList = useContext(DataContext);
  const [dates, setDates] = useState<[string, string][]>([]);
  const [series, setSeries] = useState<{}[]>([]);
  const [options, setOptions] = useState({
    chart: {
      type: 'bar',
      height: '100%',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'top',
    },
    stroke: {
      show: false,
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    xaxis: {
      title: {
        text: 'month',
      },
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
    colors: ['#FF7B7D', '#199FE6', '#3A2D96'],
  });

  useEffect(() => {
    if (stats.size && transactionsList.length) {
      const newDates: [string, string][] = [];
      const firstDate = moment(transactionsList[0].date, 'MM/DD/YYYY');

      for (let i = 0; i < stats.size; i += 1) {
        const currDate = moment(firstDate.toDate(), 'MM/DD/YYYY').subtract(i, 'months');
        const currMonth: string = currDate.format('MMM');
        const currYear: string = currDate.format('YYYY');

        newDates.push([currMonth, currYear]);
      }

      setDates(newDates.slice());
      const xaxisLab: string[] = newDates.map((curr) => curr.join(' '));
      setOptions({ ...options, xaxis: { ...options.xaxis, categories: xaxisLab } });
    }
  }, [stats]);

  useEffect(() => {
    if (dates.length) {
      const cancelled = dates.map((cur) => sumSpecMonth(cur[0], cur[1], 'cancelled', stats));
      const expenses = dates.map((cur) => sumSpecMonth(cur[0], cur[1], 'expenses', stats));
      const incomes = dates.map((cur) => sumSpecMonth(cur[0], cur[1], 'incomes', stats));

      setSeries([
        {
          name: 'Cancelled',
          data: cancelled.map((cur) => cur.toFixed(2)),
        },
        {
          name: 'Expenses',
          data: expenses.map((cur) => cur.toFixed(2)),
        },
        {
          name: 'Incomes',
          data: incomes.map((cur) => cur.toFixed(2)),
        },
      ]);
    }
  }, [dates]);

  return (
    <SWrapper className={className}>
      {location === 'dashboard' ? (
        <Typography variant="h5" color="textSecondary">
          Activities
        </Typography>
      ) : null}
      <div id="chart">
        <Chart
          options={
            location === 'dashboard'
              ? { ...options }
              : { ...options, title: { text: 'Last 6 months activities', align: 'center' } }
          }
          series={series.slice()}
          type="bar"
        />
      </div>
    </SWrapper>
  );
};

export default ActivitiesChart;
