import React from 'react';

import { Container } from './card-slider.style';

export interface CardSliderProps {
  title: string;
  icon: string;
  technologies: string;
}

const CardSlide: React.FC<CardSliderProps> = ({ technologies, icon, title }) => {
  return (
    <Container>
      <div>
        <div className="section">
          <img src={icon} alt="Frontend, backend e design" />
          <h1>{title}</h1>
        </div>
        <img src={technologies} alt="Linguagens de programação" />
      </div>
    </Container>
  );
};
export default CardSlide;
