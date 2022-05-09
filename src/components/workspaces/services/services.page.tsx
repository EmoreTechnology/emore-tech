// Dependencies
import React from 'react';
import { useTranslation } from 'react-i18next';
import email from '../../../assets/email-icon.png';
// Assets
import linkedin from '../../../assets/linkedin.png';
import wpp from '../../../assets/wpp-icon.png';
// Components
import ContactForm from '../../form-contact/form-contact.component';
import Tooltip from '../../tooltip/tooltip.component';
// Styles
import { Container } from './services.styles';

const Services: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="tooltip">
        <Tooltip icon={linkedin} description={t('descriptionContactLinkedin')} />

        <Tooltip
          icon={wpp}
          telephone={t('contactTelephone')}
          description={t('descriptionContactTelephone')}
        />

        <Tooltip
          icon={email}
          description={t('descriptionContactEmail')}
          email={t('contactEmail')}
        />
      </div>

      <div className="contact">
        <ContactForm />
      </div>
    </Container>
  );
};

export default Services;
