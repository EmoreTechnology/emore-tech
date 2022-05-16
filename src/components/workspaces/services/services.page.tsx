// Dependencies
import React from 'react';
import { useTranslation } from 'react-i18next';
import email from '../../../assets/email-icon.png';
// Assets
import linkedin from '../../../assets/linkedin.png';
import wpp from '../../../assets/wpp-icon.png';
// Components
// import ContactForm from '../../form-contact/form-contact.component';
import Tooltip from '../../tooltip/tooltip.component';
// Styles
import { Container } from './services.styles';

const Services: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="tooltip">
        <a href="https://www.linkedin.com/in/emore-technology-7ba53323a/" target="_blank">
          <Tooltip icon={linkedin} description={t('descriptionContactLinkedin')} />
        </a>

        <a
          rel="stylesheet"
          href="https://wa.me/+5551983425699?text=Ol%C3%A1,%20gostaria%20de%20ter%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20empresa.%20"
        >
          <Tooltip
            icon={wpp}
            telephone={t('contactTelephone')}
            description={t('descriptionContactTelephone')}
          />
        </a>

        <a href="mailto:emoretecnology@gmail.com?subject=Questions">
          <Tooltip
            icon={email}
            description={t('descriptionContactEmail')}
            email={t('contactEmail')}
          />
        </a>
      </div>

      {/* <div className="contact">
        <ContactForm />
      </div> */}
    </Container>
  );
};

export default Services;
