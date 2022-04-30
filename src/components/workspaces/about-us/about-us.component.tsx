import React from 'react';
import Card from '../../card/card.component';
import { Container } from './about-us.styles';

import { AboutUsTitle } from '../../../utils/mocks/about-us.mock';

const AboutUs: React.FC = () => {
  return (
    <Container>
      <div className="content">
        {AboutUsTitle.map((i) => (
          <Card key={i.title} title={i.title} description={i.description} icon={i.icon} />
        ))}
      </div>
    </Container>
  );
};

export default AboutUs;
