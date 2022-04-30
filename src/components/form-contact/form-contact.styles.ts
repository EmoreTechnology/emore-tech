import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  background: #032326;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 15px;

  @media (min-width: 768px) {
    width: 450px;
  }

  > h1 {
    font-family: 'Inter';
    font-style: 400;
    font-weight: 600;
    font-size: 27px;
    line-height: 29px;
    background: linear-gradient(
        90.88deg,
        rgba(53, 71, 179, 0.45) 35.93%,
        rgba(53, 71, 179, 0) 66.54%
      ),
      linear-gradient(89.84deg, rgba(24, 220, 220, 0.7) 51.13%, rgba(187, 242, 242, 0) 104.06%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    @media (min-width: 768px) {
      font-size: 36px;
    }
  }

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 260px;
    height: 100%;
    margin-top: 24px;

    @media (min-width: 768px) {
      width: 410px;
    }

    > input {
      text-align: center;
      box-shadow: 0 0 0 0;
      outline: 0;
      background: #dedede;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      border: none;
      width: 100%;
      margin-bottom: 15px;
      height: 25px;

      @media (min-width: 768px) {
        height: 41px;
        margin-bottom: 24px;
      }
    }

    > textarea::-webkit-input-placeholder {
      padding: 10px;
    }

    > textarea {
      text-align: center;
      width: 100%;
      height: 117px;
      margin-bottom: 24px;
      border-radius: 10px;
      background: #dedede;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      box-shadow: 0 0 0 0;
      border: none;
      outline: 0;
    }

    > button {
      margin: auto 0;
      width: 150px;
      height: 34px;
      border-radius: 10px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      box-shadow: 0 0 0 0;
      border: none;
      background: #c4c4c4;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      > p {
        margin: 0;
        font-family: 'Inter';
        font-style: 400;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        color: #565252;
      }
    }
  }
`;
