import axios from '../services/axios';

const convertCurrency = (amount: number, fromCurr: string, toCurr: string): number => {
  // eslint-disable-next-line no-param-reassign
  fromCurr = encodeURIComponent(fromCurr);
  // eslint-disable-next-line no-param-reassign
  toCurr = encodeURIComponent(toCurr);

  let total;
  const query = `?q=${fromCurr}_${toCurr}`;
  axios
    .get(query)
    .then((res) => {
      total = res.data[`${fromCurr}_${toCurr}`] * amount;
      return total;
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      return 0;
    });

  return 0;
};

export default convertCurrency;
