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

const axiosCurrency = createInstance(axiosDefs.CURR_URL, { apiKey: axiosDefs.CURR_API_KEY, compact: 'ultra' });

export default axiosCurrency;
