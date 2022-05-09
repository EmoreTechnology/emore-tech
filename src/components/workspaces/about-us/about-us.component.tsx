// Dependencies
import React from 'react';
import { useTranslation } from 'react-i18next';
// Assets
import mission from '../../../assets/mission.png';
import value from '../../../assets/value.png';
import vision from '../../../assets/vision.png';
import Card from '../../card/card.component';
// Styles
import { Container } from './about-us.styles';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="content">
        <Card
          title={t('aboutUsTitleMission')}
          description={t('aboutUsDescriptionMission')}
          icon={mission}
        />
        <Card
          title={t('aboutUsTitleValues')}
          description={t('aboutUsDescriptionValues')}
          icon={value}
        />
        <Card
          title={t('aboutUsTitleVision')}
          description={t('aboutUsDescriptionVision')}
          icon={vision}
        />
      </div>
    </Container>
  );
};

export default AboutUs;
