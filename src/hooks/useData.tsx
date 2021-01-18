import { useState, useCallback, useEffect, useContext } from 'react';
import { DataListProps } from '../contexts/DataContext';
import { LoaderDispatchContext } from '../contexts/LoaderContext';

import datamock from '../mock/data-mock.json';

const useData = () => {
  const [dataList, setDataList] = useState<DataListProps>([]);
  const setIsLoading = useContext(LoaderDispatchContext);

  const getState = useCallback(
    (isActive: boolean) => {
      const limitedResults: DataListProps = [];
      const limit = 40;
      if (datamock instanceof Array) {
        for (let i = 0; i < limit; i += 1) {
          limitedResults[i] = { ...datamock[i] };
        }
        if (isActive) {
          setDataList(limitedResults);
          setIsLoading(false);
        }
      }
    },
    [datamock]
  );

  useEffect(() => {
    let isActive = true;
    setIsLoading(true);

    getState(isActive);

    return () => {
      isActive = false;
    };
  }, [getState]);

  return dataList;
};

export default useData;
