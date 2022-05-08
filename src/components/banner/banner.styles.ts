import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 870px;
  height: 235px;
  background: #032326;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  > h1 {
    margin: 0;
    font-family: 'Poppins';
    text-align: center;
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
  }

  > .name {
    font-weight: 600;
    font-size: 42px;
    line-height: 68px;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      font-size: 60px;
    }
  }

  > .span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 50px;
    width: 60%;

    > span {
      width: 240px;
      height: 4px;
      background: linear-gradient(
          90.88deg,
          rgba(53, 71, 179, 0.45) 35.93%,
          rgba(53, 71, 179, 0) 66.54%
        ),
        linear-gradient(89.84deg, rgba(24, 220, 220, 0.7) 51.13%, rgba(187, 242, 242, 0) 104.06%);
    }

    .bloco-one {
      border-radius: 50px;
    }

    .round {
      width: 5px;
      height: 5px;
      border-radius: 50px;
    }

    .bloco-two {
      border-radius: 50px;
    }
  }

  > .title {
    font-weight: 600;
    font-size: 32px;
    line-height: 68px;

    @media (min-width: 768px) {
      font-size: 50px;
    }
  }

  > .description {
    font-weight: 600;
    font-size: 26px;
    line-height: 48px;

    @media (min-width: 768px) {
      font-size: 32px;
    }
  }
`;
