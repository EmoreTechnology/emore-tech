import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  height: 800px;
  width: 100%;

  > .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;
