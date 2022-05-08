// Dependencies
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import { ISourceOptions } from 'tsparticles-engine';

// Components
import AboutUs from '../../components/workspaces/about-us/about-us.component';
import Header from '../../components/header/header.component';
import Banner from '../../components/banner/banner.component';
import Servicos from '../../components/workspaces/servicos/servico';

// Utils
import particlesOptions from '../../particles.json';
import { useTranslation } from 'react-i18next';

// Styles
import { Container } from './home.styles';
import Services from '../../components/workspaces/services/services.page';
import Slider from '../../components/slider/slider.component';
// import '../../i18n/i18n';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };

  const particlesInit = useCallback((engine: Engine): any => {
    loadFull(engine);
  }, []);

  return (
    <Container>
      <div id="home">
        <Header />
      </div>

      <div>
        <button style={{ background: '#fff' }} onClick={() => changeLanguage('en')}>
          EN
        </button>
        <button style={{ background: '#fff' }} onClick={() => changeLanguage('pt')}>
          PT
        </button>
        <hr />
        <div>
          <h1 style={{ background: '#fff' }}>{t('title')}</h1>
        </div>
        <div style={{ background: '#fff' }}>{t('description.part1')}</div>
        <div style={{ background: '#fff' }}>{t('description.part2')}</div>
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
