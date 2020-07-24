const apiURL = 'https://dog.ceo/api';

interface IAllBreeds {
  message: object;
}

export const getAllBreeds = async (): Promise<IAllBreeds | Error> => {
  //Mudar o tipo do retorno Promise
  try {
    const response = await fetch(`${apiURL}/breeds/list/all`);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error('Failed to get data from the server');
  }
};

interface IDogImages {
  message: string[];
}

export interface IDogImagesResponse {
  image: string;
  id: string;
}

export const getDogImages = async (breed: string): Promise<IDogImagesResponse[] | Error> => {
  try {
    const response = await fetch(`${apiURL}/breed/${breed}/images`);
    const json: IDogImages = await response.json();
    const objectDog = json.message.map(image => {
      const imageId = image.split('/').pop()!;
      const id = imageId.replace(/\..\w*/, '');
      return { image, id };
    });
    return objectDog;
  } catch (error) {
    console.log(error);
    throw new Error('No response from the API');
  }
};
