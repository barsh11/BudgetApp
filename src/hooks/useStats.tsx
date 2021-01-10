import { useState, useCallback, useEffect } from 'react';
import moment from 'moment';
import { statsProps, initialStatsContext } from '../contexts/StatsContext';

const data = require('../mock/data-mock.json');

export const firstDate = moment(data[0].date, 'MM/DD/YYYY');

const useStats = () => {
  const lastDate = moment(firstDate.toDate(), 'MM/DD/YYYY').subtract(6, 'months');

  const [currData, setCurrData] = useState<statsProps>(initialStatsContext);

  const getState = useCallback(
    (isActive: boolean) => {
      const newCurrData: statsProps = new Map();

      if (data instanceof Array) {
        let i: number = 0;

        for (i; i < data.length; i += 1) {
          const currDate = moment(data[i].date, 'MM/DD/YYYY');
          if (currDate.isAfter(lastDate)) {
            const currMonth = currDate.format('MMM');
            const currYear = parseInt(currDate.format('YYYY'), 10);
            const arrayDate: [number, string] = [currYear, currMonth];
            switch (data[i].transactionType) {
              case 'expense':
                if (newCurrData.get(arrayDate) === undefined) {
                  newCurrData.set(arrayDate, {
                    expenses: parseFloat(data[i].amount),
                    incomes: 0,
                    cancelled: 0,
                  });
                } else {
                  newCurrData.set(arrayDate, {
                    expenses: newCurrData.get(arrayDate)!.expenses + parseFloat(data[i].amount),
                    incomes: newCurrData.get(arrayDate)!.incomes,
                    cancelled: newCurrData.get(arrayDate)!.cancelled,
                  });
                }
                break;
              case 'Income':
                if (newCurrData.get(arrayDate) === undefined) {
                  newCurrData.set(arrayDate, {
                    incomes: parseFloat(data[i].amount),
                    expenses: 0,
                    cancelled: 0,
                  });
                } else {
                  newCurrData.set(arrayDate, {
                    incomes: newCurrData.get(arrayDate)!.incomes + parseFloat(data[i].amount),
                    expenses: newCurrData.get(arrayDate)!.expenses,
                    cancelled: newCurrData.get(arrayDate)!.cancelled,
                  });
                }
                break;
              default:
                if (newCurrData.get(arrayDate) === undefined) {
                  newCurrData.set(arrayDate, {
                    cancelled: parseFloat(data[i].amount),
                    incomes: 0,
                    expenses: 0,
                  });
                } else {
                  newCurrData.set(arrayDate, {
                    cancelled: newCurrData.get(arrayDate)!.cancelled + parseFloat(data[i].amount),
                    incomes: newCurrData.get(arrayDate)!.incomes,
                    expenses: newCurrData.get(arrayDate)!.expenses,
                  });
                }
            }
          }
        }
        // eslint-disable-next-line no-console
        console.log(newCurrData);
        if (isActive) {
          setCurrData(newCurrData);
        }
      }
    },
    [data]
  );

  useEffect(() => {
    let isActive = true;

    getState(isActive);

    return () => {
      isActive = false;
    };
  }, [getState]);

  return currData;
};

export default useStats;
