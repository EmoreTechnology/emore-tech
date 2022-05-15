import styled, { keyframes } from 'styled-components';

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

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

  > .skeleton-desktop {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media (min-width: 768px) {
      display: flex;
    }

    .header {
      display: inline-block;
      height: 40px;
      width: 100%;
      animation: ${skeletonKeyframes} 3000ms ease-in-out infinite;
      background-color: #032326;
      background-image: linear-gradient(90deg, #032326, #032326, #2c458d, #032326);
      background-size: 800px 100%;
      background-repeat: no-repeat;
      border-radius: 4px;
    }

    .banner {
      display: inline-block;
      justify-content: center;
      box-shadow: 10px #2c458d;
      width: 100%;
      max-width: 450px;
      height: 150px;
      margin-top: 40px;
      animation: ${skeletonKeyframes} 3000ms ease-in-out infinite;
      background-color: #032326;
      background-image: linear-gradient(90deg, #032326, #032326, #2c458d, #032326);
      background-size: 800px 100%;
      background-repeat: no-repeat;
      border-radius: 8px;

      @media (min-width: 768px) {
        max-width: 850px;
        height: 235px;
        margin-top: 360px;
      }
    }
  }
`;
