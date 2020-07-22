import React, { ChangeEvent } from 'react';
import { useBreed } from '../../hooks/useBreed';

interface IProps {
  options: string[];
}

const Select: React.FC<IProps> = ({ options, ...rest }) => {
  const { setSelectedBreed, selectedBreed } = useBreed();

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedBreed(value);
  };

  return (
    <select {...rest} value={selectedBreed} onChange={handleSelect}>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
