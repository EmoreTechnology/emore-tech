/* eslint-disable jsx-a11y/anchor-is-valid */
// Dependencies
import React from 'react';
import { arrayHeaderLanguage } from '../../utils/mocks/header.mock';
// Utils
import { HeaderProps } from '../../utils/models/header.model';
// Styles
import { Container } from './header.styles';

import { Anchor } from 'antd';
import { useState, useEffect } from 'react';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

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
            <h1 key={lang.language} onClick={() => changeLanguage(lang.initials)}>
              {lang.language}
            </h1>
          ))}
        </div>
      </aside>
      {on && (
        <Anchor className="menu-open" targetOffset={targetOffset}>
          <Link href="#home" title={t('initial')} />
          <Link href="#about-us" title={t('aboutUs')} />
          <Link href="#servicess" title={t('services')} />
          <Link href="#tecnology" title={t('tecnology')} />
          <Link href="#tooltip" title={t('contact')} />
          <div className="language">
            {arrayHeaderLanguage.map((lang) => (
              <h1 key={lang.language} onClick={() => changeLanguage(lang.initials)}>
                {lang.language}
              </h1>
            ))}
          </div>
        </Anchor>
      )}
      <div className="content">
        <Anchor className="menu" targetOffset={targetOffset}>
          <Link href="#home" title={t('initial')} />
          <Link href="#about-us" title={t('aboutUs')} />
          <Link href="#servicess" title={t('services')} />
          <Link href="#tecnology" title={t('tecnology')} />
          <Link href="#tooltip" title={t('contact')} />
          <div className="language">
            {arrayHeaderLanguage.map((lang) => (
              <h1 key={lang.language} onClick={() => changeLanguage(lang.initials)}>
                {lang.language}
              </h1>
            ))}
          </div>
        </Anchor>
      </div>
    </Container>
  );
};

export default Header;
