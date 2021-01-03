import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from './contexts/UserContext';
import DataContextProvider from './contexts/DataContext';
import Homepage from './views/pages/Homepage';

const App: React.FC = () => (
  <BrowserRouter>
    <UserContextProvider>
      <DataContextProvider>
        <Homepage />
      </DataContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);

export default App;
