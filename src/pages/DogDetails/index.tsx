import React, { useEffect } from 'react';
import { Container, Content, Form, Photo } from './styles';
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
    savedMessage,
    setSavedMessage,
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
  }, [setDogName, setColor, setFont, selectedDog.id]);

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
    setSavedMessage(true);
    setTimeout(() => {
      setSavedMessage(false);
    }, 1500);
  };

  return (
    <Container>
      <Navbar />
      <Content font={font} color={color}>
        <span>{dogName}</span>
        <img src={selectedDog.image} alt={selectedBreed} />
        <Form>
          <Photo>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              placeholder="choose a name"
              onChange={e => setDogName(e.target.value)}
              value={dogName}
            />
          </Photo>
          <Select message="choose font type" value={font} setState={setFont} options={fonts}>
            Font:
          </Select>
          <Select message="choose font color" value={color} setState={setColor} options={colors}>
            Color:
          </Select>
          <button onClick={handleSaveDogOnLocalStorage}>Save</button>
        </Form>
      </Content>
      {savedMessage && <span>Dados salvos com sucesso</span>}
    </Container>
  );
};

export default DogDetails;
