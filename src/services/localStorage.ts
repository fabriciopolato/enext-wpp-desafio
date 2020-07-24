import { IDogImagesResponse } from '../services/api';

interface IDogsInfo {
  image: string;
  id: string;
  name: string;
  font: string;
  color: string;
  date: Date;
}

const currentBreed = 'CURRENT_BREED';

export const setDogsInfoInLocalStorage = (dogsInfo: IDogsInfo) => {
  localStorage.setItem(dogsInfo.id, JSON.stringify(dogsInfo));
};

export const getDogsInfoFromLocalStorage = (id: string): IDogsInfo | null => {
  const savedDog = localStorage.getItem(id);
  if (savedDog) {
    return JSON.parse(savedDog);
  }
  return null;
};

export const setSelectedBreedInLocalStorage = (selectedBreedDogs: IDogImagesResponse[]) => {
  localStorage.setItem(currentBreed, JSON.stringify(selectedBreedDogs));
};

export const getSelectedBreedFromLocalStorage = () => {
  const savedBreed = localStorage.getItem(currentBreed);
  if (savedBreed) {
    return JSON.parse(savedBreed);
  }
  return [];
};
