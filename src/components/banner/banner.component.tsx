import React from 'react';

import { Container } from './banner.styles';

const Banner: React.FC = () => {
  return (
    <Container>
      <h1 className="name">Emore Tecnology</h1>

      <div className="span">
        <span className="bloco-one" />

        <span className="round" />

        <span className="bloco-two" />
      </div>

      <h1 className="title">Software e Design</h1>
      <h1 className="description">Simples. Poderoso</h1>
    </Container>
  );
};

export default Banner;
