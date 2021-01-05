import React, { useState } from 'react';

export type DataItemProps = {
  id: string;
  transactionType: string;
  paypal: boolean;
  time: string;
  date: string;
  currency: string;
  category: string;
  amount: string;
  location: {
    country: string;
    city: string;
    street: string;
    lat: number;
    lng: number;
  };
  company: string;
  isStarred: boolean;
};

export type DataListProps = DataItemProps[];

export const DataContext = React.createContext<DataListProps>([]);
export const DataDispatchContext = React.createContext<Function>(() => {});

const DataContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<DataListProps>([]);

  // eslint-disable-next-line no-console
  console.log(data);

  return (
    <DataContext.Provider value={data.slice()}>
      <DataDispatchContext.Provider value={setData}>{children}</DataDispatchContext.Provider>
    </DataContext.Provider>
  );
};

export default DataContextProvider;
