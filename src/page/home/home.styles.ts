import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  > .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 840px;
  }

  > .home {
    display: flex;
    flex-direction: column;
    width: 100%;

    > .tsparticles {
      position: fixed;
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      left: 0;
      top: 0;
      z-index: -1;
    }
  }

  > .aboutUs {
    display: flex;
    width: 100%;
    margin-top: 20px;
    background: rgba(44, 69, 141, 0.3);
  }

  > .services {
    display: flex;
    margin-top: 140px;
  }
`;
