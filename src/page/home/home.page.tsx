// Dependencies
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import { ISourceOptions } from 'tsparticles-engine';
// Components
import AboutUs from '../../components/workspaces/about-us/about-us.component';
import Header from '../../components/header/header.component';
// Utils
import particlesOptions from '../../particles.json';
// Styles
import { Container } from './home.styles';
import Services from '../../components/workspaces/services/services.page';

const Home: React.FC = () => {
  const particlesInit = useCallback((engine: Engine): any => {
    loadFull(engine);
  }, []);

  return (
    <Container>
      <Header />

      <div className="home">
        <Particles
          id="tsparticles"
          className="tsparticles"
          options={particlesOptions as ISourceOptions}
          init={particlesInit}
        />
      </div>

      <div className="aboutUs">
        <AboutUs />
      </div>

      <div className="services">
        <Services />
      </div>
    </Container>
  );
};

export default Home;
