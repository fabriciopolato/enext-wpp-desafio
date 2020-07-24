import React, { Dispatch, SetStateAction } from 'react';
import { Container } from './styles';
import ReactSelect from 'react-select';
import { SelectComponentsProps } from 'react-select/src/Select';

interface IProps extends SelectComponentsProps {
  options: string[];
  setState: Dispatch<SetStateAction<any>>;
}

const Select: React.FC<IProps> = ({ setState, options, children, ...rest }) => {
  const handleSelect = ({ value }: any) => {
    setState(value);
  };

  const op = options.map(option => ({ value: option, label: option }));

  return (
    <Container>
      <label>{children}</label>
      <ReactSelect {...rest} onChange={handleSelect} options={op} />
    </Container>
  );
};

export default Select;
