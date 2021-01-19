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
      <UserContextProvider>
        <DataContextProvider>
          <StatsContextProvider>
            <LoaderContextProvider>
              <AppContextProvider>
                <Homepage />
              </AppContextProvider>
            </LoaderContextProvider>
          </StatsContextProvider>
        </DataContextProvider>
      </UserContextProvider>
    </ErrorBoundary>
  </BrowserRouter>
);

export default App;
