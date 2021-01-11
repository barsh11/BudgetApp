import { useState, useCallback, useEffect } from 'react';
import moment from 'moment';
import { statsProps, initialStatsContext } from '../contexts/StatsContext';
/* import convertCurrency from '../utils/convertCurrency'; */

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
          if (currDate.isAfter(lastDate) && currDate.isBefore(firstDate)) {
            const currMonth = currDate.format('MMM');
            const currYear = currDate.format('YYYY');
            const dateStr: string = `${currYear}_${currMonth}`;

            switch (data[i].transactionType) {
              case 'expense':
                if (newCurrData.get(dateStr) === undefined) {
                  newCurrData.set(dateStr, {
                    expenses: parseFloat(data[i].amount),
                    incomes: 0,
                    cancelled: 0,
                  });
                } else {
                  newCurrData.set(dateStr, {
                    expenses: newCurrData.get(dateStr)!.expenses + parseFloat(data[i].amount),
                    incomes: newCurrData.get(dateStr)!.incomes,
                    cancelled: newCurrData.get(dateStr)!.cancelled,
                  });
                }
                break;
              case 'Income':
                if (newCurrData.get(dateStr) === undefined) {
                  newCurrData.set(dateStr, {
                    incomes: parseFloat(data[i].amount),
                    expenses: 0,
                    cancelled: 0,
                  });
                } else {
                  newCurrData.set(dateStr, {
                    incomes: newCurrData.get(dateStr)!.incomes + parseFloat(data[i].amount),
                    expenses: newCurrData.get(dateStr)!.expenses,
                    cancelled: newCurrData.get(dateStr)!.cancelled,
                  });
                }
                break;
              default:
                if (newCurrData.get(dateStr) === undefined) {
                  newCurrData.set(dateStr, {
                    cancelled: parseFloat(data[i].amount),
                    incomes: 0,
                    expenses: 0,
                  });
                } else {
                  newCurrData.set(dateStr, {
                    cancelled: newCurrData.get(dateStr)!.cancelled + parseFloat(data[i].amount),
                    incomes: newCurrData.get(dateStr)!.incomes,
                    expenses: newCurrData.get(dateStr)!.expenses,
                  });
                }
            }
          }
        }
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
