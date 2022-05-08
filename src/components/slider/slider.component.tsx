// Dependencies
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// Styles
import { Container } from './slider.styles';

// Components
import CardSlide from '../card-slider/card-slider.component';

// Utils
import { CardSlider } from '../../utils/mocks/card-slider.mock';

import { Navigation } from 'swiper';

const Slider: React.FC = () => {
  return (
    <Container>
      <Swiper navigation={true} modules={[Navigation]}>
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
