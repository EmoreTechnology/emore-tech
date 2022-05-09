// Dependencies
import React from 'react';
import { useTranslation } from 'react-i18next';

// Styles
import { Container } from './form-contact.styles';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t('contactForm')}</h1>

      <form action="https://formsubmit.co/emoretecnology@gmail.com" method="post">
        <input type="hidden" name="_next" />
        <input type="text" name="name" placeholder={t('name')} required />
        <input type="email" name="email" placeholder={t('email')} required />
        <input type="tel" name="number" placeholder={t('contact')} required />
        <textarea name="message" placeholder={t('message')} id=""></textarea>
        <button type="submit">
          <p>{t('send')}</p>
        </button>
      </form>
    </Container>
  );
};

export default ContactForm;
