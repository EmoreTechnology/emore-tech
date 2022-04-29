import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgba(44, 69, 141, 0.3);
  height: 800px;
  width: 100%;

  > .tooltip {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    max-width: 850px;
    > div + div {
      margin-top: 14px;

      @media (min-width: 488px) {
        margin: 0;
      }
    }

    > :last-child {
      margin-top: 14px;

      @media (min-width: 750px) {
        margin: 0;
      }
    }
  }
`;
