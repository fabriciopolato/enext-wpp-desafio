import styled from 'styled-components';

interface IProps {
  font: string;
  color: string;
}

export const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  border: 20px solid black;
  padding-bottom: 50px;

  > span {
    display: block;
    text-align: center;
    margin-top: 10px;
    font-size: 30px;
    font-weight: 500;
  }
`;

export const Content = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  width: 70%;
  height: auto;
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  border: solid 5px #494949;

  cursor: pointer;
  background: whitesmoke;

  @media (max-width: 800px) {
    flex-direction: column;
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

export const Photo = styled.div<IProps>`
  position: relative;
  width: 70%;
  margin: 0 auto;

  > img {
    display: block;
    width: 100%;

    @media (max-width: 800px) {
      margin-bottom: 10px;
    }
  }

  > span {
    position: absolute;
    bottom: 0;
    left: 0;
    align-self: center;
    font-family: ${props => props.font};
    color: ${props => props.color};
    font-size: clamp(16px, 7vw, 50px);
    margin: 20px;
    align-self: center;
  }
`;

export const Form = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  align-self: center;

  @media (max-width: 800px) {
    margin-left: 0;
  }
`;
