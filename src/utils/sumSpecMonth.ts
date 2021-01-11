import { statsProps } from '../contexts/StatsContext';

const sumSpecMonth = (currMonth: string, currYear: string, type: string, stats: statsProps): number => {
  let sum: number = 0;

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

  return sum;
};

export default sumSpecMonth;
