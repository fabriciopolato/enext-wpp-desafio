import React from 'react';
import { Container } from './styles';
import logo from '../../assets/logo.jpeg';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="enext logo" />
      </Link>
      <Link to="/about">Sobre</Link>
    </Container>
  );
};

export default Navbar;
