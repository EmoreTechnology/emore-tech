import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  background: #032326;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 5px;
  height: 100px;

  @media (min-width: 768px) {
    width: 245px;
    height: 149px;
  }

  > span {
    width: 64px;
    border: 1px solid #ffffff;
    margin: 0 0 10px 0;

    @media (min-width: 768px) {
      width: 84px;
    }
  }

  > p {
    font-family: 'Inter';
    font-style: 400;
    font-weight: 200;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    margin: 0 0 10px 0;

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  > img {
    width: 35px;
    margin: 5px;

    @media (min-width: 768px) {
      width: 45px;
      margin: 12px;
    }
  }
`;
