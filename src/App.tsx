import React from 'react';
import { ContextProvider } from './hooks/useBreed';
import Routes from './routes/Routes';
import GlobalStyle from './styles/global';

const App = () => (
  <ContextProvider>
    <Routes />
    <GlobalStyle />
  </ContextProvider>
);

export default App;
