// Dependencies
import React from 'react';
import { arrayHeaderLanguage, arrayHeaderTitle } from '../../utils/mocks/header.mock';
// Utils
import { HeaderProps } from '../../utils/models/header.model';
// Styles
import { Container } from './header.styles';

const Header: React.FC<HeaderProps> = ({ title, language }) => {
  return (
    <Container>
      <div className="wrapper">
        {arrayHeaderTitle.map((tit) => (
          <p key={tit.title}>{tit.title}</p>
        ))}
      </div>

      <div className="language">
        {arrayHeaderLanguage.map((lang) => (
          <p>{lang.language}</p>
        ))}
      </div>
    </Container>
  );
};

export default Header;
