interface IDogsInfo {
  image: string;
  id: string;
  name: string;
  font: string;
  color: string;
  date: Date;
}

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
