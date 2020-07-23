import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

export interface IContext {
  setSelectedBreed: Dispatch<SetStateAction<string>>;
  selectedBreed: string;
  breeds: string[];
  setBreeds: Dispatch<SetStateAction<string[]>>;
  errorFromApi: string;
  setErrorFromApi: Dispatch<SetStateAction<string>>;
  dogImages: string[];
  setDogImages: Dispatch<SetStateAction<string[]>>;
}

const Context = createContext<IContext>({} as IContext);

const ContextProvider: React.FC = ({ children }) => {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [breeds, setBreeds] = useState<string[]>([]);
  const [errorFromApi, setErrorFromApi] = useState('');
  const [dogImages, setDogImages] = useState<string[]>([]);

  return (
    <Context.Provider
      value={{
        selectedBreed,
        setSelectedBreed,
        breeds,
        setBreeds,
        errorFromApi,
        setErrorFromApi,
        dogImages,
        setDogImages,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
