import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from './contexts/UserContext';
import DataContextProvider from './contexts/DataContext';
import AppContextProvider from './contexts/AppContext';
import Homepage from './views/pages/Homepage';

const App: React.FC = () => (
  <BrowserRouter>
    <UserContextProvider>
      <DataContextProvider>
        <AppContextProvider>
          <Homepage />
        </AppContextProvider>
      </DataContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);

export default App;
