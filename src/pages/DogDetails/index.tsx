import React, { useEffect } from 'react';
import { Container } from './styles';
import { useParams } from 'react-router-dom';
import { useBreed } from '../../hooks/useBreed';
import { Navbar, Select } from '../../components';
import fonts from '../../utils/fonts.json';
import colors from '../../utils/colors.json';

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
  } = useBreed();

  useEffect(() => {
    const searchedDog = dogImages.find(dog => dog.id === id);

    if (searchedDog) {
      setSelectedDog(searchedDog);
    }
  }, [id, dogImages, setSelectedDog]);

  useEffect(() => {
    setDogName('');
    //checar no local storage
  }, [setDogName]);

  const handleSaveOnLocalStorage = () => {};

  return (
    <>
      <Navbar />
      <Container>
        <img src={selectedDog.image} alt={selectedBreed} />
        <input
          onChange={e => setDogName(e.target.value)}
          placeholder="Give a name to the dog"
          type="text"
        />
        <Select value={font} setState={setFont} options={fonts}>
          Font
        </Select>
        <Select value={color} setState={setColor} options={colors}>
          Color
        </Select>
        <button onClick={handleSaveOnLocalStorage}>Save</button>
      </Container>
    </>
  );
};

export default DogDetails;
