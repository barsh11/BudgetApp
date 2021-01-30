import axios from 'axios';
import * as axiosDefs from '../constants/apis';

const createInstance = (url, queryParams) => {
  const instance = axios.create({
    baseURL: url,
    params: {
      ...queryParams,
    },
  });
  return instance;
};

export const axiosCurrency = createInstance(axiosDefs.CURR_URL, { base: 'USD' });

export const axiosTransactions = createInstance(axiosDefs.TRANSACTIONS_URL, { key: axiosDefs.API_KEY });

export const axiosUser = createInstance(axiosDefs.USER_URL, { key: axiosDefs.API_KEY });
