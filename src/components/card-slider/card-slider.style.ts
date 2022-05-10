import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  background: #032326;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 20px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    width: 450px;
    height: 400px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px;

    > .section {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;

      > img {
        width: 35px;
        height: 35px;
        margin-right: 20px;

        @media (min-width: 768px) {
          width: 45px;
          height: 45px;
        }
      }

      > h1 {
        font-family: 'Inter';
        font-style: 400;
        font-weight: 600;
        font-size: 20px;
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
    }
    > img {
      padding: 24px;
      width: inherit;

      @media (min-width: 768px) {
        padding: 30px;
        width: auto;
        min-width: 250px;
      }
    }
  }
`;
