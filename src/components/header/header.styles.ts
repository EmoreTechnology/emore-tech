import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);

  > .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    > h1 {
      cursor: pointer;
      margin-right: 24px;
      font-family: "Inter";
      font-style: 400;
      font-weight: 600;
      font-size: 18px;
      line-height: 17px;
      color: #a1a1a1;

      :hover {
        color: #fff;
      }
    }
    > h1 + h1 {
      margin: 0 24px 0 0;
    }
  }

  > div {
    display: flex;
    flex-direction: row;

    > h1 {
      cursor: pointer;
      margin-right: 24px;
      font-family: "Inter";
      font-style: 400;
      font-weight: 600;
      font-size: 18px;
      line-height: 17px;
      color: #a1a1a1;

      :hover {
        color: #fff;
      }
    }
  }
`;
