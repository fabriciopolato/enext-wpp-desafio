import React, { ChangeEvent, Dispatch, SetStateAction, SelectHTMLAttributes } from 'react';

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  setState: Dispatch<SetStateAction<any>>;
}

const Select: React.FC<IProps> = ({ setState, options, children, ...rest }) => {
  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setState(value);
  };

  return (
    <>
      <label>{children}</label>
      <select {...rest} onChange={handleSelect}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
