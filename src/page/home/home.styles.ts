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
    padding-top: 50px;
  }

  > .services {
    display: flex;
    padding-bottom: 50px;
  }

  > .servicos {
    padding: 50px 0;

    @media (min-width: 768px) {
      padding: 100px 0;
    }
  }
`;
