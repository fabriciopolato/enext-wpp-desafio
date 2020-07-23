import React, { useEffect } from 'react';
import { Container } from './styles';
import { useParams } from 'react-router-dom';
import { useBreed } from '../../hooks/useBreed';
import { Navbar, Select } from '../../components';
import fonts from '../../utils/fonts.json';
import colors from '../../utils/colors.json';
import {
  getDogsInfoFromLocalStorage,
  setDogsInfoInLocalStorage,
} from '../../services/localStorage';

interface Params {
  id: string;
}

const DogDetails: React.FC = () => {
  const { id } = useParams() as Params;
  const {
    selectedDog,
    setSelectedDog,
    dogImages,
    selectedBreed,
    setFont,
    setColor,
    font,
    color,
    setDogName,
    dogName,
  } = useBreed();

  useEffect(() => {
    const searchedDog = dogImages.find(dog => dog.id === id);

    if (searchedDog) {
      setSelectedDog(searchedDog);
    }
  }, [id, dogImages, setSelectedDog]);

  useEffect(() => {
    setDogName('');
    setColor('');
    setFont('');
    const savedDog = getDogsInfoFromLocalStorage(selectedDog.id);

    if (savedDog) {
      setDogName(savedDog.name);
      setColor(savedDog.color);
      setFont(savedDog.font);
    }

    console.log(savedDog);
  }, [setDogName, setColor, setFont]);

  const handleSaveDogOnLocalStorage = () => {
    const dogsInfo = {
      image: selectedDog.image,
      id: selectedDog.id,
      name: dogName,
      font,
      color,
      date: new Date(),
    };

    setDogsInfoInLocalStorage(dogsInfo);
  };

  return (
    <>
      <Navbar />
      <Container>
        <img src={selectedDog.image} alt={selectedBreed} />
        <input
          type="text"
          placeholder="Give a name to the dog"
          onChange={e => setDogName(e.target.value)}
          value={dogName}
        />
        <Select value={font} setState={setFont} options={fonts}>
          Font
        </Select>
        <Select value={color} setState={setColor} options={colors}>
          Color
        </Select>
        <button onClick={handleSaveDogOnLocalStorage}>Save</button>
      </Container>
    </>
  );
};

export default DogDetails;
