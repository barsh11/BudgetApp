import moment from 'moment';
import { statsProps } from '../contexts/StatsContext';

const sumLastmonths = (numMonths: number, type: string, stats: statsProps, date: string): number => {
  let sum: number = 0;
  const firstDate = moment(date, 'MM/DD/YYYY');

  for (let i = 0; i <= numMonths; i += 1) {
    const currDate = moment(firstDate.toDate(), 'MM/DD/YYYY').subtract(i, 'months');

    const currMonth = currDate.format('MMM');
    const currYear = parseInt(currDate.format('YYYY'), 10);

    const currTransaction = stats.get(`${currYear}_${currMonth}`);
    if (currTransaction !== undefined) {
      switch (type) {
        case 'expenses':
          sum += currTransaction.expenses;
          break;
        case 'incomes':
          sum += currTransaction.incomes;
          break;
        default:
          sum += currTransaction.cancelled;
      }
    }
  }

  return sum;
};

export default sumLastmonths;
