// Dependencies
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import backend from '../../assets/backend.png';
// Assets
import frontend from '../../assets/frontend.png';
import designer from '../../assets/web-design.png';
// Components
import CardSlide from '../card-slider/card-slider.component';
// Styles
import { Container } from './slider.styles';

const Slider: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <CardSlide
            title={t('titleTecnologyFrontend')}
            description={t('descriptionTecnologyFrontend')}
            icon={frontend}
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardSlide
            title={t('titleTecnologyBackend')}
            description={t('descriptionTecnologyBackend')}
            icon={backend}
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardSlide
            title={t('titleTecnologyDesigner')}
            description={t('descriptionTecnologyDesigner')}
            icon={designer}
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Slider;
