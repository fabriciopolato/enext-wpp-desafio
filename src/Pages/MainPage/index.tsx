import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { Select } from '../../components';
import { getAllBreeds } from '../../services/api';

const MainPage: React.FC = () => {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [errorFromApi, setErrorFromApi] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllBreeds();
        setBreeds(Object.keys(response.message));
      } catch (error) {
        setErrorFromApi(error.message);
      }
    })();
  }, []);

  return (
    <Container>
      {errorFromApi ? <span>{errorFromApi}</span> : <Select options={breeds}></Select>}
    </Container>
  );
};

export default MainPage;
