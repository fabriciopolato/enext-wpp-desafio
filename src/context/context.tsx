import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

export interface IContext {
  setSelectedBreed: Dispatch<SetStateAction<string>>;
  selectedBreed: string;
  breeds: string[];
  setBreeds: Dispatch<SetStateAction<string[]>>;
  errorFromApi: string;
  setErrorFromApi: Dispatch<SetStateAction<string>>;
  dogImages: IDogImages[];
  setDogImages: Dispatch<SetStateAction<IDogImages[]>>;
  selectedDog: IDogImages;
  setSelectedDog: Dispatch<SetStateAction<IDogImages>>;
  font: string;
  setFont: Dispatch<SetStateAction<string>>;
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  dogName: string;
  setDogName: Dispatch<SetStateAction<string>>;
}

interface IDogImages {
  image: string;
  id: string;
}

const Context = createContext<IContext>({} as IContext);

const ContextProvider: React.FC = ({ children }) => {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [breeds, setBreeds] = useState<string[]>([]);
  const [errorFromApi, setErrorFromApi] = useState('');
  const [dogImages, setDogImages] = useState<IDogImages[]>([]);
  const [selectedDog, setSelectedDog] = useState<IDogImages>({} as IDogImages);
  const [font, setFont] = useState('');
  const [color, setColor] = useState('');
  const [dogName, setDogName] = useState('');

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
        selectedDog,
        setSelectedDog,
        font,
        setFont,
        color,
        setColor,
        dogName,
        setDogName,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
