import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    height: 70px;
    flex-direction: row;
  }

  > .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    > p {
      cursor: pointer;
      font-family: 'Inter';
      font-style: 400;
      font-weight: 600;
      font-size: 12px;
      color: #a1a1a1;

      :hover {
        color: #fff;
      }

      @media (min-width: 768px) {
        font-size: 18px;
        margin-right: 24px;
      }
    }

    @media (min-width: 768px) {
      justify-content: center;
    }
  }

  > .language {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: end;

    > p {
      cursor: pointer;
      margin: 0 14px 0 0;
      padding: 0;
      font-family: 'Inter';
      font-style: 400;
      font-weight: 600;
      font-size: 12px;
      line-height: 17px;
      color: #a1a1a1;

      :hover {
        color: #fff;
      }

      @media (min-width: 768px) {
        font-size: 18px;
      }
    }
    @media (min-width: 768px) {
      width: 10%;
    }
  }
`;
