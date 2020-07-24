import React, { useEffect } from 'react';
import { Container, Grid, Content } from './styles';
import { Select, Navbar } from '../../components';
import { getAllBreeds, getDogImages, IDogImagesResponse } from '../../services/api';
import { useBreed } from '../../hooks/useBreed';
import DogImageCard from '../../components/DogImageCard';
import { Link } from 'react-router-dom';
import { setSelectedBreedInLocalStorage } from '../../services/localStorage';

const MainPage: React.FC = () => {
  const {
    setBreeds,
    setErrorFromApi,
    errorFromApi,
    breeds,
    selectedBreed,
    setSelectedBreed,
    setDogImages,
    dogImages,
  } = useBreed();

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllBreeds();
        setBreeds(Object.keys(response.message));
      } catch (error) {
        setErrorFromApi(error.message);
      }
    })();
  }, [setBreeds, setErrorFromApi]);

  useEffect(() => {
    if (!selectedBreed) {
      return;
    }

    (async () => {
      try {
        const response = await getDogImages(selectedBreed);
        setDogImages(response as IDogImagesResponse[]);
        setSelectedBreedInLocalStorage(response as IDogImagesResponse[]);
      } catch (error) {
        setErrorFromApi(error.message);
      }
    })();
  }, [setDogImages, selectedBreed, setErrorFromApi]);

  if (errorFromApi) {
    return <span>{errorFromApi}</span>;
  }

  return (
    <Container>
      <Navbar />
      <Content>
        <Select
          message="select a breed"
          setState={setSelectedBreed}
          value={selectedBreed}
          options={breeds}
        ></Select>
        <Grid>
          {dogImages.map(dog => (
            <Link key={dog.id} to={`/edit/${dog.id}`}>
              <DogImageCard dog={dog.image} />
            </Link>
          ))}
        </Grid>
      </Content>
    </Container>
  );
};

export default MainPage;
