// Dependencies
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation, Pagination, EffectCube, Autoplay } from 'swiper';
import { Container } from './slider.styles';
import Card from '../card/card.component';
import { CardSlider } from '../../utils/mocks/card-slider.mock';
import CardSlide from '../card-slider/card-slider.component';

SwiperCore.use([Navigation, Pagination, EffectCube, Autoplay]);

const Slider: React.FC = () => {
  return (
    <Container>
      <Swiper
        // effect={'cube'}
        rewind={true}
        slidesPerView={'auto'}
        // cubeEffect={{
        //   shadow: true,
        //   slideShadows: true,
        //   shadowOffset: 20,
        //   shadowScale: 0.94,
        // }}
        navigation={true}
        modules={[Navigation, EffectCube, Autoplay]}
      >
        {CardSlider.map((i) => (
          <SwiperSlide key={i.title}>
            <CardSlide key={i.title} title={i.title} description={i.description} icon={i.icon} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Slider;
