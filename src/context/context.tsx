import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

export interface IContext {
  setSelectedBreed: Dispatch<SetStateAction<string>>;
  selectedBreed: string;
  breeds: string[];
  setBreeds: Dispatch<SetStateAction<string[]>>;
  errorFromApi: string;
  setErrorFromApi: Dispatch<SetStateAction<string>>;
}

const Context = createContext<IContext>({} as IContext);

const ContextProvider: React.FC = ({ children }) => {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [breeds, setBreeds] = useState<string[]>([]);
  const [errorFromApi, setErrorFromApi] = useState('');

  return (
    <Context.Provider
      value={{ selectedBreed, setSelectedBreed, breeds, setBreeds, errorFromApi, setErrorFromApi }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
