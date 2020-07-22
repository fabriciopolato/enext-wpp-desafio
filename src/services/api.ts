const apiURL = 'https://dog.ceo/api';

export const getAllBreeds = async (): Promise<any> => {
  //Mudar o tipo do retorno Promise
  try {
    const response = await fetch(`${apiURL}/breeds/list/all`);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error('Failed to get data from the server');
  }
};

export const getDogsImage = async (breed: string): Promise<string[] | object> => {
  try {
    const response = await fetch(`${apiURL}/breed/${breed}/images`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return { message: 'No response from the API' };
  }
};
