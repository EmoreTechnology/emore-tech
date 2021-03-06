import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(44, 69, 141, 0.3);
  height: 400px;
  width: 100%;

  > .tooltip {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 850px;
    margin-top: 28px;

    > a {
      text-decoration: none;
      height: 122px;

      @media (min-width: 768px) {
        height: 100%;
      }
    }

    > a + a {
      @media (min-width: 768px) {
        margin: 0;
      }
    }

    /* > :last-child {
      margin-top: 14px;

      @media (min-width: 750px) {
        margin: 0;
      }
    } */
  }

  > .contact {
    display: flex;
    margin-top: 20px;

    @media (min-width: 768px) {
      margin-top: 30px;
    }
  }
`;
