// Dependencies
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import { ISourceOptions } from 'tsparticles-engine';

// Styles
import { Container } from './skeleton.style';

// Utils
import particlesOptions from '../../particles.json';

const SkeletonLoading: React.FC = (props) => {
  const particlesInit = useCallback((engine: Engine): any => {
    loadFull(engine);
  }, []);

  return (
    <Container>
      <div className="home">
        <Particles
          id="tsparticles"
          className="tsparticles"
          options={particlesOptions as ISourceOptions}
          init={particlesInit}
        />
      </div>

      <div className="skeleton-desktop">
        <span className="header" />

        <span className="banner" />
      </div>
    </Container>
  );
};

export default SkeletonLoading;
