import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
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
    flex-wrap: nowrap;
  }

  aside {
    display: flex;
    width: 100%;
    margin: 0;
    padding-top: 10px;
    align-items: start;
    @media (min-width: 768px) {
      display: none;
    }

    svg {
      color: #fff;
      width: 37px;
      height: 32px;
    }
  }

  .content {
    display: flex;
    width: 100%;
    justify-content: center;
    z-index: 10;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .ant-anchor-ink {
    display: flex;
  }

  .ant-anchor {
    display: flex;
    background: #000;
    border-radius: 0 0 10px 10px;
    height: 40px;

    @media (min-width: 768px) {
      width: 100%;
      align-items: center;
    }

    > .language {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 20px;
      align-items: center;

      > .flag {
        display: flex;
        width: 14px;
        height: 14px;
      }
      > img + img {
        margin-left: 10px;
      }
    }
  }

  .language-mobile {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: end;
    margin-top: 14px;

    > h1 {
      cursor: pointer;
      margin: 0px 14px 0 0;
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
      display: none;
      width: 10%;
    }
  }

  .links {
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (min-width: 768px) {
      display: none;
    }
  }

  a {
    cursor: pointer;
    text-align: center;
    font-family: 'Inter';
    font-style: 400;
    font-weight: 600;
    font-size: 12px;
    color: #a1a1a1;
    margin: 0 10px;
    text-decoration: none;
    padding: 5px 0;

    :hover {
      color: #fff;
    }

    @media (min-width: 768px) {
      font-size: 18px;
      padding: 15px 0;
    }
  }
`;
