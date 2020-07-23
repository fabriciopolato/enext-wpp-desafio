import React from 'react';
import { useBreed } from '../../hooks/useBreed';
import { Container } from './styles';

interface IProps {
  dog: string;
}

const DogImageCard: React.FC<IProps> = ({ dog }) => {
  const { selectedBreed } = useBreed();

  return (
    <Container>
      <img src={dog} alt={selectedBreed} />
    </Container>
  );
};

export default DogImageCard;
