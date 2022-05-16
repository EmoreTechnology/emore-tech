import React from 'react';
import { Container } from './card-servicos.style';

export interface CardServicesProps {
  icon: string;
  title: string;
  description: string;
}

const Servicos: React.FC<CardServicesProps> = ({ description, icon, title }) => {
  return (
    <Container>
      <div>
        <div className="content">
          <img src={icon} alt="Serviços de tecnologia" />

          <h1>{title}</h1>
        </div>

        <p>{description}</p>
      </div>
    </Container>
  );
};

export default Servicos;
