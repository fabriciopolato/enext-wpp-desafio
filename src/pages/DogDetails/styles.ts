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

  .css-2b097c-container {
    margin-bottom: 10px;
  }
`;

export const Content = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
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
    margin-bottom: 10px;
    width: 100%;
    font-size: 1.6rem;
    background-color: hsl(0, 0%, 100%);
    border-color: hsl(0, 0%, 80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    padding: 10px 10px;
    letter-spacing: 1px;
  }

  button {
    border-radius: 4px;
    padding: 10px 20px;
    margin: 0 auto;
    margin-top: 10px;
    display: block;
    text-transform: uppercase;
    font-weight: bold;
    background-color: rgb(69, 145, 246);
    border: none;
    width: 100%;
    color: white;
    transition: background-color linear 100ms;
  }
`;

export const Photo = styled.div<IProps>`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: fit-content;

  > img {
    display: block;
    width: 100%;
    border-radius: 5px;

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
  width: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;

  @media (max-width: 800px) {
    margin-left: 0;
  }
`;
