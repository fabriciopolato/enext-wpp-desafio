import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  margin-bottom: 50px;

  img {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: red;
    margin: 0;
    padding: 0;
    font-weight: 800;
    text-transform: uppercase;
  }
`;
