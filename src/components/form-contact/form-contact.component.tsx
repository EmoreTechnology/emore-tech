import React from 'react';

import { Container } from './form-contact.styles';

const ContactForm: React.FC = () => {
  return (
    <Container>
      <h1>Entre em contato conosco</h1>

      <form action="https://formsubmit.co/emoretecnology@gmail.com" method="post">
        <input type="hidden" name="_next" />
        <input type="text" name="name" placeholder="Nome" required />
        <input type="email" name="email" placeholder="E-mail" required />
        <input type="tel" name="number" placeholder="Contato" required />
        <textarea name="message" placeholder="Mensagem" id=""></textarea>
        <button type="submit">
          <p>Enviar</p>
        </button>
      </form>
    </Container>
  );
};

export default ContactForm;
