interface IDogsInfo {
  image: string;
  id: string;
  name: string;
  font: string;
  color: string;
}

export const setDogsInfoInLocalStorage = (dogsInfo: IDogsInfo) => {
  localStorage.setItem(dogsInfo.id, JSON.stringify(dogsInfo));
};

export const getDogsInfoFromLocalStorage = (id: string) => {
  return localStorage.getItem(id);
};
