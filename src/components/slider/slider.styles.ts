import styled from 'styled-components';

export const Container = styled.div`
  display: revert;
  flex-direction: row;
  width: 100%;
  background: rgba(44, 69, 141, 0.3);
  padding: 40px 0;

  .swiper {
    width: 90%;
    height: 100%;

    @media (min-width: 768px) {
      width: 70%;
    }
  }
  .swiper-wrapper {
    margin: 0;
  }

  .swiper-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-button-prev {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 4px;
    background: linear-gradient(
        90.88deg,
        rgba(53, 71, 179, 0.45) 35.93%,
        rgba(53, 71, 179, 0) 66.54%
      ),
      linear-gradient(89.84deg, rgba(24, 220, 220, 0.7) 51.13%, rgba(187, 242, 242, 0) 104.06%);
    width: 48px;
    height: 48px;
  }
  .swiper-button-prev:hover {
    background-color: #2b2b2b;
  }
  .swiper-button-next {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 4px;
    background: linear-gradient(
        90.88deg,
        rgba(53, 71, 179, 0.45) 35.93%,
        rgba(53, 71, 179, 0) 66.54%
      ),
      linear-gradient(89.84deg, rgba(24, 220, 220, 0.7) 51.13%, rgba(187, 242, 242, 0) 104.06%);
    width: 48px;
    height: 48px;
  }
  .swiper-button-next:hover {
    background-color: #2b2b2b;
  }
`;
