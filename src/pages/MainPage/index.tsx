import React, { useEffect } from 'react';
import { Container } from './styles';
import { Select, Navbar } from '../../components';
import { getAllBreeds } from '../../services/api';
import { useBreed } from '../../hooks/useBreed';

const MainPage: React.FC = () => {
  const { setBreeds, setErrorFromApi, errorFromApi, breeds } = useBreed();

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllBreeds();
        setBreeds(Object.keys(response.message));
      } catch (error) {
        setErrorFromApi(error.message);
      }
    })();
  });

  return (
    <>
      <Navbar />
      <Container>
        {errorFromApi ? <span>{errorFromApi}</span> : <Select options={breeds}></Select>}
      </Container>
      {/* <Footer/> */}
    </>
  );
};

export default MainPage;
