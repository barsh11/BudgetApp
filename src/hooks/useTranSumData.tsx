import { useState, useCallback, useEffect } from 'react';
import { TransactionsSummaryProps } from '../services/axios';
import data from '../mock/data.json';

const useTranSumData: Function = () => {
  const [dataList, setDataList] = useState<TransactionsSummaryProps[]>([]);

  const getState = useCallback(
    (isActive: boolean) => {
      const limitedResults: TransactionsSummaryProps[] = [];
      const limit = 10;
      if (data instanceof Array) {
        for (let i = 0; i < limit; i += 1) {
          limitedResults[i] = { ...data[i] };
        }
        if (isActive) {
          setDataList(limitedResults);
        }
      }
    },
    [data]
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

export default useTranSumData;
