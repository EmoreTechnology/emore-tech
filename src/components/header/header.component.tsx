// Dependencies
import React from 'react';
import { arrayHeaderLanguage, arrayHeaderTitle } from '../../utils/mocks/header.mock';
// Utils
import { HeaderProps } from '../../utils/models/header.model';
// Styles
import { Container } from './header.styles';

import { Anchor } from 'antd';
import { useState, useEffect } from 'react';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { Link } = Anchor;

const Header: React.FC<HeaderProps> = ({ title, language }) => {
  const [targetOffset, setTargetOffset] = useState<number | undefined>(undefined);
  useEffect(() => {
    setTargetOffset(window.innerHeight / 65);
  }, []);

  const [on, setOn] = React.useState(false);

  const handleOn = () => {
    setOn(!on);
  };

  return (
    <Container>
      <aside className={on ? 'icon-menu' : ''}>
        <a href="#" onClick={handleOn}>
          <FontAwesomeIcon icon={faAlignJustify} className="menu-open" />
        </a>
        <div className="language-mobile">
          {arrayHeaderLanguage.map((lang) => (
            <h1 key={lang.language}>{lang.language}</h1>
          ))}
        </div>
      </aside>
      {on && (
        <Anchor className="menu-open" targetOffset={targetOffset}>
          <Link href="#home" title="Home" />
          <Link href="#about-us" title="Sobre nós" />
          <Link href="#servicess" title="Serviços" />
          <Link href="#tecnology" title="Tecnologias" />
          <Link href="#tooltip" title="Contato" />
          <div className="language">
            {arrayHeaderLanguage.map((lang) => (
              <h1 key={lang.language}>{lang.language}</h1>
            ))}
          </div>
        </Anchor>
      )}
      <div className="content">
        <Anchor className="menu" targetOffset={targetOffset}>
          <Link href="#home" title="Home" />
          <Link href="#about-us" title="Sobre nós" />
          <Link href="#servicess" title="Serviços" />
          <Link href="#tecnology" title="Tecnologias" />
          <Link href="#tooltip" title="Contato" />
          <div className="language">
            {arrayHeaderLanguage.map((lang) => (
              <h1 key={lang.language}>{lang.language}</h1>
            ))}
          </div>
        </Anchor>
      </div>
    </Container>
  );
};

export default Header;
