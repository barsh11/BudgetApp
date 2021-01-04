import React, { useState } from 'react';

export const LoaderContext = React.createContext<boolean>(false);
export const LoaderDispatchContext = React.createContext<Function>(() => {});

const LoaderContextProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <LoaderContext.Provider value={isLoading}>
      <LoaderDispatchContext.Provider value={setIsLoading}>{children}</LoaderDispatchContext.Provider>
    </LoaderContext.Provider>
  );
};

export default LoaderContextProvider;
