/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// Dependencies
import React from 'react';
import { arrayHeaderLanguage } from '../../utils/mocks/header.mock';
import { Anchor } from 'antd';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// Utils
import { HeaderProps } from '../../utils/models/header.model';
// Styles
import { Container } from './header.styles';

const { Link } = Anchor;

const Header: React.FC<HeaderProps> = ({ title, language }) => {
  const [targetOffset, setTargetOffset] = useState<number | undefined>(undefined);

  useEffect(() => {
    setTargetOffset(window.innerHeight / 65);
  }, []);

  const { t, i18n } = useTranslation();
  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };

  return (
    <Container>
      <div className="content">
        <Anchor className="menu" targetOffset={targetOffset}>
          <Link href="#home" title={t('initial')} />
          <Link href="#about-us" title={t('aboutUs')} />
          <Link href="#servicess" title={t('services')} />
          <Link href="#tecnology" title={t('tecnology')} />
          <Link href="#tooltip" title={t('contact')} />
          <div className="language">
            {arrayHeaderLanguage.map((lang) => (
              <img
                className="flag"
                src={lang.language}
                onClick={() => changeLanguage(lang.initials)}
              />
            ))}
          </div>
        </Anchor>
      </div>
    </Container>
  );
};

export default Header;
