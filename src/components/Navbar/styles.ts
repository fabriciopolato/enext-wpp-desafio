import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: 'white';
  box-shadow: 5px 1px 5px 5px #eee;

  padding: 0 50px;
  margin-bottom: 200px;

  > a {
    text-decoration: none;
    color: red;
  }
`;
