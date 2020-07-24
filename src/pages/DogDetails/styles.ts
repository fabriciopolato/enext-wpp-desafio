import styled from 'styled-components';

interface IProps {
  font: string;
  color: string;
}

export const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  border: 20px solid black;

  > span {
    display: block;
    text-align: center;
    margin-top: 10px;
    font-size: 30px;
    font-weight: 500;
  }
`;

export const Content = styled.div<IProps>`
  width: 70%;
  max-width: 700px;
  height: auto;
  margin: 0 auto;
  cursor: pointer;
  background: whitesmoke;
  padding: 20px;
  border-radius: 10px;
  border: solid 5px #494949;
  display: flex;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  > span {
    position: absolute;
    font-family: ${props => props.font};
    color: ${props => props.color};
    font-size: 50px;
    margin: 20px;
    align-self: center;
  }

  img {
    width: 70%;
    align-self: center;
    margin-bottom: 0;

    @media (max-width: 900px) {
      margin-bottom: 10px;
    }
  }

  label {
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 2rem;
  }

  input {
    margin: 5px 0 10px 0;
    width: 100%;
    font-size: 1.4rem;
  }

  button {
    border-radius: 4px;
    padding: 5px 20px;
    margin: 0 auto;
    display: block;
    text-transform: uppercase;
    font-weight: bold;
    background-color: #fff;
  }
`;

export const Photo = styled.div`
  position: relative;
`;

export const Form = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  align-self: center;

  @media (max-width: 900px) {
    margin-left: 0;
  }
`;
