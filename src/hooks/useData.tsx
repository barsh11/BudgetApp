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

  // const getState = useCallback(async (newApp: any) => {
  //   const limitedResults: DataListProps = [];

  //   await axios
  //     .get('')
  //     .then((res) => {
  //       const limit = 40;
  //       if (res.data instanceof Array) {
  //         const firstDate = moment(res.data[0].date, 'MM/DD/YYYY');
  //         // const newApp = { ...app };
  //         console.log('newApp: ', newApp);
  //         // console.log('app: ', app);
  //         setApp({ ...newApp, firstDate });
  //         for (let i = 0; i < limit; i += 1) {
  //           limitedResults[i] = { ...res.data[i] };
  //         }

  //         setDataList(limitedResults);
  //         setData(limitedResults);
  //       }
  //     })
  //     .catch((err) => {
  //       // eslint-disable-next-line no-console
  //       console.log(err);
  //     });
  //   setIsLoading(false);
  // }, []);

  // useEffect(() => {
  //   setIsLoading(true);

  //   const fetchData = async () => {
  //     await getState(app);
  //   };
  //   if (app.currencyRates) {
  //     fetchData();
  //   }
  // }, [app.currencyRates]);

  return dataList;
};

export default useData;
