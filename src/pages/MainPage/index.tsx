import React, { useEffect } from 'react';
import { Container } from './styles';
import { Select, Navbar } from '../../components';
import { getAllBreeds, getDogImages } from '../../services/api';
import { useBreed } from '../../hooks/useBreed';
import DogImageCard from '../../components/DogImageCard';

const MainPage: React.FC = () => {
  const {
    setBreeds,
    setErrorFromApi,
    errorFromApi,
    breeds,
    selectedBreed,
    setDogImages,
    dogImages,
  } = useBreed();

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllBreeds();
        console.log(response);
        setBreeds(Object.keys(response.message));
      } catch (error) {
        setErrorFromApi(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    if (!selectedBreed) {
      return;
    }

    (async () => {
      try {
        const response = await getDogImages(selectedBreed);
        console.log(response);
        setDogImages(response.message as string[]);
      } catch (error) {
        setErrorFromApi(error.message);
      }
    })();
  }, [selectedBreed]);

  if (errorFromApi) {
    return <span>{errorFromApi}</span>;
  }

  return (
    <>
      <Navbar />
      <Container>
        {dogImages.map(image => (
          <DogImageCard key={image} dog={image} />
        ))}
        <Select options={breeds}></Select>
      </Container>
      {/* <Footer/> */}
    </>
  );
};

export default MainPage;
