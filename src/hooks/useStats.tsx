import { useState, useCallback, useEffect, useContext } from 'react';
import moment from 'moment';
import { statsProps } from '../contexts/StatsContext';
import { AppContext } from '../contexts/AppContext';
import { MONTHS } from '../constants/globalConst';
import convertCurrency from '../utils/convertCurrency';

const data = require('../mock/data-mock.json');

export const firstDate = moment(data[0].date, 'MM/DD/YYYY');

const useStats = () => {
  const lastDate = moment(firstDate.toDate(), 'MM/DD/YYYY').subtract(MONTHS, 'months');

  const app = useContext(AppContext);
  const [currData, setCurrData] = useState<statsProps>(new Map());

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
                    expenses: convertCurrency(
                      parseFloat(data[i].amount),
                      data[i].currency,
                      app.currency,
                      app.currencyRates
                    ),
                    incomes: 0,
                    cancelled: 0,
                  });
                } else {
                  newCurrData.set(dateStr, {
                    expenses:
                      newCurrData.get(dateStr)!.expenses +
                      convertCurrency(parseFloat(data[i].amount), data[i].currency, app.currency, app.currencyRates),
                    incomes: newCurrData.get(dateStr)!.incomes,
                    cancelled: newCurrData.get(dateStr)!.cancelled,
                  });
                }
                break;
              case 'Income':
                if (newCurrData.get(dateStr) === undefined) {
                  newCurrData.set(dateStr, {
                    incomes: convertCurrency(
                      parseFloat(data[i].amount),
                      data[i].currency,
                      app.currency,
                      app.currencyRates
                    ),
                    expenses: 0,
                    cancelled: 0,
                  });
                } else {
                  newCurrData.set(dateStr, {
                    incomes:
                      newCurrData.get(dateStr)!.incomes +
                      convertCurrency(parseFloat(data[i].amount), data[i].currency, app.currency, app.currencyRates),
                    expenses: newCurrData.get(dateStr)!.expenses,
                    cancelled: newCurrData.get(dateStr)!.cancelled,
                  });
                }
                break;
              default:
                if (newCurrData.get(dateStr) === undefined) {
                  newCurrData.set(dateStr, {
                    cancelled: convertCurrency(
                      parseFloat(data[i].amount),
                      data[i].currency,
                      app.currency,
                      app.currencyRates
                    ),
                    incomes: 0,
                    expenses: 0,
                  });
                } else {
                  newCurrData.set(dateStr, {
                    cancelled:
                      newCurrData.get(dateStr)!.cancelled +
                      convertCurrency(parseFloat(data[i].amount), data[i].currency, app.currency, app.currencyRates),
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
    [app.currencyRates]
  );

  useEffect(() => {
    let isActive = true;

    if (app.currencyRates) {
      getState(isActive);
    }

    // eslint-disable-next-line consistent-return
    return () => {
      isActive = false;
    };
  }, [getState, app.currencyRates]);

  return currData;
};

export default useStats;
