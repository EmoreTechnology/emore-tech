// Dependencies
import React, { lazy, useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import { ISourceOptions } from 'tsparticles-engine';

// Utils
import particlesOptions from '../../particles.json';

// Styles
import { Container } from './home.styles';

// Lazy components
const Banner = lazy(() => import('../../components/banner/banner.component'));
const Header = lazy(() => import('../../components/header/header.component'));
const Slider = lazy(() => import('../../components/slider/slider.component'));
const AboutUs = lazy(() => import('../../components/workspaces/about-us/about-us.component'));
const Services = lazy(() => import('../../components/workspaces/services/services.page'));
const Servicos = lazy(() => import('../../components/workspaces/servicos/servico'));

const Home: React.FC = () => {
  const particlesInit = useCallback((engine: Engine): any => {
    loadFull(engine);
  }, []);

  return (
    <Container>
      <div id="home">
        <Header />
      </div>

      <div id="home" className="banner">
        <Banner />
      </div>

      <div className="home">
        <Particles
          id="tsparticles"
          className="tsparticles"
          options={particlesOptions as ISourceOptions}
          init={particlesInit}
        />
      </div>

      <div id="about-us" className="aboutUs">
        <AboutUs />
      </div>

      <div id="servicess" className="servicos">
        <Servicos />
      </div>

      <div id="tecnology" className="carrosel">
        <Slider />
      </div>

      <div id="tooltip" className="services">
        <Services />
      </div>
    </Container>
  );
};

export default Home;
