import styled from 'styled-components';

export const Container = styled.div`
  background: #eee;
`;

export const Grid = styled.div`
  line-height: 0;
  column-count: 5;
  column-gap: 10px;

  @media (max-width: 1200px) {
    column-count: 4;
  }
  @media (max-width: 1000px) {
    column-count: 3;
  }
  @media (max-width: 800px) {
    column-count: 2;
  }
  @media (max-width: 400px) {
    column-count: 1;
  }
`;
