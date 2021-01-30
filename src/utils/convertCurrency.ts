const convertCurrency = (
  amount: number,
  fromCurr: string,
  toCurr: string,
  rates: { [key: string]: number }
): number => {
  let ratio1: number = rates[fromCurr];
  if (ratio1 === undefined) {
    ratio1 = rates.EUR;
  } // if currency not in list- assume EUR
  const ratio2: number = rates[toCurr];
  const total: number = (amount / ratio1) * ratio2;
  if (Number.isNaN(total)) {
    return 0;
  }
  return total;
};

export default convertCurrency;
