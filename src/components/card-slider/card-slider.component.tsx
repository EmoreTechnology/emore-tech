import React from 'react';

import { Container } from './card-slider.style';

export interface CardSliderProps {
  description: string;
  title: string;
  icon: string;
}

const CardSlide: React.FC<CardSliderProps> = ({ description, icon, title }) => {
  return (
    <Container>
      <div>
        <div className="section">
          <img src={icon} alt="" />
          <h1>{title}</h1>
        </div>
        <p>{description}</p>
      </div>
    </Container>
  );
};
export default CardSlide;
