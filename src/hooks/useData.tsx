import { useState, useEffect, useContext } from 'react';
import { DataContext, DataDispatchContext, DataListProps } from '../contexts/DataContext';
import { LoaderDispatchContext } from '../contexts/LoaderContext';
import { axiosTransactions as axios } from '../services/axios';

const useData = () => {
  const [dataList, setDataList] = useState<DataListProps>([]);
  const data = useContext(DataContext);
  const setIsLoading = useContext(LoaderDispatchContext);
  const setData = useContext(DataDispatchContext);

  const getState = async () => {
    try {
      if (!data.length) {
        setIsLoading(true);

        const newData: DataListProps = [];

        const res = await axios.get('');
        if (res.data instanceof Array) {
          for (let i = 0; i < res.data.length; i += 1) {
            newData[i] = { ...res.data[i] };
          }

          setDataList(newData);
          setData(newData);
          setIsLoading(false);
        }
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getState();
  }, []);

  return dataList;
};

export default useData;
