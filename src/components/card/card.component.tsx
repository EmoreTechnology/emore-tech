import React from 'react';
import { Container } from './card.styles';
import {AboutUsProps}  from '../../utils/models/about-us.mock';

const Card: React.FC<AboutUsProps> = ({ description, icon, title}) => {
	return (
		<Container>
			<div>
				<p>{icon}</p>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
		</Container>
	);
}

export default Card;