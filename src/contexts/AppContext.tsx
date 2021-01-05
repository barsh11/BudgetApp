import React, { useState } from 'react';

export type AppProps = {
  summaryItemId: string;
};

const initialAppContext = {
  summaryItemId: '',
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
