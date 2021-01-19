import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Chart from 'react-apexcharts';
import { DataContext } from '../../../contexts/DataContext';

const SWrapper = styled.div`
  grid-column: 2 / span 1;

  width: 100%;
  background-color: var(--color-white);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;

  @media only screen and (min-width: 75em) {
    grid-column: 3 / span 1;
    grid-row: 1 / span 2;
  }
`;

const MethodsChart: React.FC = () => {
  const transactionsList = useContext(DataContext);
  const [methods, setMethods] = useState<{ paypal: number; nonPaypal: number }>({ paypal: 0, nonPaypal: 0 });
  const [series, setSeries] = useState<{}[]>([]);
  const [options] = useState({
    chart: {
      type: 'bar',
      width: '100%',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        startingShape: 'flat',
        endingShape: 'flat',
        columnWidth: '20%',
        barHeight: '70%',
        rangeBarOverlap: true,
        rangeBarGroupRows: false,
      },
    },
    legend: {
      show: false,
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
      categories: ['Paypal', 'Other methods'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    title: {
      text: 'No. of purchasesby payment method',
      align: 'center',
    },
  });

  useEffect(() => {
    let isActive = true;

    const newMethods: { paypal: number; nonPaypal: number } = { paypal: 0, nonPaypal: 0 };
    transactionsList.forEach((cur) => {
      if (cur.paypal) {
        newMethods.paypal += 1;
      } else {
        newMethods.nonPaypal += 1;
      }
    });

    if (isActive) {
      setMethods(newMethods);
    }

    return () => {
      isActive = false;
    };
  }, [transactionsList]);

  useEffect(() => {
    let isActive = true;

    if (methods) {
      if (isActive) {
        setSeries([
          {
            data: [methods.paypal, methods.nonPaypal],
          },
        ]);
      }
    }

    return () => {
      isActive = false;
    };
  }, [methods]);

  return (
    <SWrapper>
      <div id="chart">
        <Chart options={{ ...options }} series={series.slice()} type="bar" height="100%" />
      </div>
    </SWrapper>
  );
};

export default MethodsChart;
