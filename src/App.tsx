import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from './contexts/UserContext';
import DataContextProvider from './contexts/DataContext';
import AppContextProvider from './contexts/AppContext';
import StatsContextProvider from './contexts/StatsContext';
import Homepage from './views/pages/Homepage';

const App: React.FC = () => (
  <BrowserRouter>
    <UserContextProvider>
      <DataContextProvider>
        <StatsContextProvider>
          <AppContextProvider>
            <Homepage />
          </AppContextProvider>
        </StatsContextProvider>
      </DataContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);

export default App;
