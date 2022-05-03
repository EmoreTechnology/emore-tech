// Dependencies
import React from 'react';
import { arrayHeaderLanguage, arrayHeaderTitle } from '../../utils/mocks/header.mock';
// Utils
import { HeaderProps } from '../../utils/models/header.model';
// Styles
import { Container } from './header.styles';

import { Anchor } from 'antd';
import { useState, useEffect } from 'react';

const { Link } = Anchor;

const Header: React.FC<HeaderProps> = ({ title, language }) => {
  const [targetOffset, setTargetOffset] = useState<number | undefined>(undefined);
  useEffect(() => {
    setTargetOffset(window.innerHeight / 65);
  }, []);

  return (
    <Container>
      <Anchor targetOffset={targetOffset}>
        <Link href="#home" title="Home" />
        <Link href="#about-us" title="Sobre nós" />
        <Link href="#servicess" title="Serviços" />
        <Link href="#tecnologias" title="Tecnologias" />
        <Link href="#tooltip" title="Contato" />
      </Anchor>

      <div className="language">
        {arrayHeaderLanguage.map((lang) => (
          <h1 key={lang.language}>{lang.language}</h1>
        ))}
      </div>
    </Container>
  );
};

export default Header;
