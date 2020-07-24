import React, { ChangeEvent, Dispatch, SetStateAction, SelectHTMLAttributes } from 'react';
import { Container } from './styles';

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  setState: Dispatch<SetStateAction<any>>;
  message: string;
}

const Select: React.FC<IProps> = ({ setState, options, message, children, ...rest }) => {
  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setState(value);
  };

  return (
    <Container>
      <label>{children}</label>
      <select {...rest} onChange={handleSelect}>
        <option hidden>{message}</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;
