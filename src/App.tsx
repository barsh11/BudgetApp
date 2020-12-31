import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from './contexts/UserContext';
import Homepage from './views/pages/Homepage';

const App: React.FC = () => (
  <BrowserRouter>
    <UserContextProvider>
      <Homepage />
    </UserContextProvider>
  </BrowserRouter>
);

export default App;
