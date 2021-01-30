import { useState, useContext, useEffect } from 'react';
import moment from 'moment';
import { statsProps, StatsDispatchContext } from '../contexts/StatsContext';
import { AppContext } from '../contexts/AppContext';
import { DataContext } from '../contexts/DataContext';
import { LoaderDispatchContext } from '../contexts/LoaderContext';
import convertCurrency from '../utils/convertCurrency';

const useStats = () => {
  const app = useContext(AppContext);
  const transactionsList = useContext(DataContext);
  const setStats = useContext(StatsDispatchContext);
  const [currData, setCurrData] = useState<statsProps>(new Map());
  const setIsLoading = useContext(LoaderDispatchContext);

  const getState = () => {
    setIsLoading(true);

    if (transactionsList.length && app.currencyRates) {
      const newCurrData: statsProps = new Map();
      const firstDate = moment(transactionsList[0].date, 'MM/DD/YYYY');
      const lastDate = moment(firstDate, 'MM/DD/YYYY').subtract(6, 'months');
      let i: number = 0;

      for (i; i < transactionsList.length; i += 1) {
        const currDate = moment(transactionsList[i].date, 'MM/DD/YYYY');
        if (currDate.isAfter(lastDate) && currDate.isBefore(firstDate)) {
          const currMonth = currDate.format('MMM');
          const currYear = currDate.format('YYYY');
          const dateStr: string = `${currYear}_${currMonth}`;

          switch (transactionsList[i].transactionType) {
            case 'expense':
              if (newCurrData.get(dateStr) === undefined) {
                newCurrData.set(dateStr, {
                  expenses: convertCurrency(
                    parseFloat(transactionsList[i].amount),
                    transactionsList[i].currency,
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
                    convertCurrency(
                      parseFloat(transactionsList[i].amount),
                      transactionsList[i].currency,
                      app.currency,
                      app.currencyRates
                    ),
                  incomes: newCurrData.get(dateStr)!.incomes,
                  cancelled: newCurrData.get(dateStr)!.cancelled,
                });
              }
              break;
            case 'Income':
              if (newCurrData.get(dateStr) === undefined) {
                newCurrData.set(dateStr, {
                  incomes: convertCurrency(
                    parseFloat(transactionsList[i].amount),
                    transactionsList[i].currency,
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
                    convertCurrency(
                      parseFloat(transactionsList[i].amount),
                      transactionsList[i].currency,
                      app.currency,
                      app.currencyRates
                    ),
                  expenses: newCurrData.get(dateStr)!.expenses,
                  cancelled: newCurrData.get(dateStr)!.cancelled,
                });
              }
              break;
            default:
              if (newCurrData.get(dateStr) === undefined) {
                newCurrData.set(dateStr, {
                  cancelled: convertCurrency(
                    parseFloat(transactionsList[i].amount),
                    transactionsList[i].currency,
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
                    convertCurrency(
                      parseFloat(transactionsList[i].amount),
                      transactionsList[i].currency,
                      app.currency,
                      app.currencyRates
                    ),
                  incomes: newCurrData.get(dateStr)!.incomes,
                  expenses: newCurrData.get(dateStr)!.expenses,
                });
              }
          }
        }
      }

      setCurrData(newCurrData);
      setStats(newCurrData);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getState();
  }, [transactionsList, app.currency, app.currencyRates]);

  return currData;
};

export default useStats;
