import React from 'react';
import MainPage from './Pages/MainPage';
import { ContextProvider } from './hooks/useBreed';

const App = () => (
  <ContextProvider>
    <MainPage />
  </ContextProvider>
);

export default App;
