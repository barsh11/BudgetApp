import React, { useState } from 'react';

export type AppProps = {
  summaryItemId: string;
  showSidebar: boolean;
};

const initialAppContext = {
  summaryItemId: '',
  showSidebar: true,
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
