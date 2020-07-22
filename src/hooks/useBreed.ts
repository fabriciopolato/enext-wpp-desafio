import { useContext } from 'react';
import { IContext, Context, ContextProvider } from '../context/context';

const useBreed = (): IContext => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useBreed must be used within an ContextProvider');
  }

  return context;
};

export { ContextProvider, useBreed };
