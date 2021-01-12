const convertCurrency = (
  amount: number,
  fromCurr: string,
  toCurr: string,
  rates: { [key: string]: number }
): number => {
  const ratio1: number = rates[fromCurr];
  const ratio2: number = rates[toCurr];
  const total: number = (amount / ratio1) * ratio2;
  if (Number.isNaN(total)) {
    return 0;
  }
  return total;
};

export default convertCurrency;
