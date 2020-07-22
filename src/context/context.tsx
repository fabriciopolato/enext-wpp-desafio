import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

export interface IContext {
  setSelectedBreed: Dispatch<SetStateAction<string>>;
  selectedBreed: string;
}

const Context = createContext<IContext>({} as IContext);

const ContextProvider: React.FC = ({ children }) => {
  const [selectedBreed, setSelectedBreed] = useState('');

  return (
    <Context.Provider value={{ selectedBreed, setSelectedBreed }}>{children}</Context.Provider>
  );
};

export { ContextProvider, Context };
