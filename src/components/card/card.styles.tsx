import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  height: 237px;
  background: #032326;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    > h1 {
      font-family: "Inter";
      font-style: 400;
      font-weight: 600;
      font-size: 36px;
      line-height: 29px;
      background: linear-gradient(
          90.88deg,
          rgba(53, 71, 179, 0.45) 35.93%,
          rgba(53, 71, 179, 0) 66.54%
        ),
        linear-gradient(
          89.84deg,
          rgba(24, 220, 220, 0.7) 51.13%,
          rgba(187, 242, 242, 0) 104.06%
        );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    > p {
      padding: 0 16px;
      font-family: "Poppins";
      font-style: 400;
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      text-align: center;
      color: #ffffff;
    }
  }
`;
