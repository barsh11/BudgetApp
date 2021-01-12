import axios from 'axios';
import * as urlDefs from '../constants/urls';

const createInstance = (url, queryParams) => {
  const instance = axios.create({
    baseURL: url,
    params: {
      ...queryParams,
    },
  });
  return instance;
};

const axiosCurrency = createInstance(urlDefs.CURR_URL, { base: 'USD' });

export default axiosCurrency;
