import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from './contexts/UserContext';
import DataContextProvider from './contexts/DataContext';
import LoaderContextProvider from './contexts/LoaderContext';
import AppContextProvider from './contexts/AppContext';
import StatsContextProvider from './contexts/StatsContext';
import Homepage from './views/pages/Homepage';
import ErrorBoundary from './hoc/ErrorBoundary';

const App: React.FC = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ErrorBoundary>
      <AppContextProvider>
        <LoaderContextProvider>
          <StatsContextProvider>
            <DataContextProvider>
              <UserContextProvider>
                <Homepage />
              </UserContextProvider>
            </DataContextProvider>
          </StatsContextProvider>
        </LoaderContextProvider>
      </AppContextProvider>
    </ErrorBoundary>
  </BrowserRouter>
);

export default App;
