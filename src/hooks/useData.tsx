import { useState, useCallback, useEffect } from 'react';
import { DataListProps } from '../contexts/DataContext';

import datamock from '../mock/data-mock.json';

const useData = () => {
  const [dataList, setDataList] = useState<DataListProps>([]);

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
        }
      }
    },
    [datamock]
  );

  useEffect(() => {
    let isActive = true;

    getState(isActive);

    return () => {
      isActive = false;
    };
  }, [getState]);

  return dataList;
};

export default useData;
