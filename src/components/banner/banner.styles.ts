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

  > .title {
    font-weight: 600;
    font-size: 60px;
    line-height: 68px;
  }

  > .description {
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
  }
`;
