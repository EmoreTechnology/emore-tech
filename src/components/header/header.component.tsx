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
					<h1 key={tit.title}>{tit.title}</h1>
				))}
			</div>

			<div>
				{arrayHeaderLanguage.map((lang) => (
					<h1>{lang.language}</h1>
				))}
			</div>
		</Container>
	);
}

export default Header;