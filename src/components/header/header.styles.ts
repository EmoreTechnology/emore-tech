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
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }
  }

  div {
    display: flex;

    @media (min-width: 768px) {
      width: 100%;
    }
  }

  .ant-anchor-ink {
    display: flex;
  }

  .ant-anchor {
    display: flex;
    background: #000;
    border-radius: 0 0 10px 10px;

    @media (min-width: 768px) {
      width: 100%;
    }

    > .language {
      display: none;
      flex-direction: row;
      width: 100%;
      justify-content: end;
      align-items: center;

      > h1 {
        cursor: pointer;
        margin: 0px 14px 0 0;
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
        display: flex;
        width: 10%;
      }
    }
  }

  .language-mobile {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: end;

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

  a {
    cursor: pointer;
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
