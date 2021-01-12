import React, { useState } from 'react';

export type AppProps = {
  summaryItemId: string;
  showSidebar: boolean;
  currency: string;
  currencyRates: { [key: string]: number };
};

const initialAppContext = {
  summaryItemId: '',
  showSidebar: false,
  currency: 'EUR',
  currencyRates: {},
};

export const AppContext = React.createContext<AppProps>(initialAppContext);
export const AppDispatchContext = React.createContext<Function>(() => {});

const AppContextProvider: React.FC = ({ children }) => {
  const [app, setApp] = useState<AppProps>(initialAppContext);

  return (
    <AppContext.Provider value={{ ...app }}>
      <AppDispatchContext.Provider value={setApp}>{children}</AppDispatchContext.Provider>
    </AppContext.Provider>
  );
};

export default AppContextProvider;
