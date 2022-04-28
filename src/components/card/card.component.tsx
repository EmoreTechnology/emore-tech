import React from 'react';
import { Container } from './card.styles';


const Card: React.FC = () => {
	return (
		<Container>
			<div>
				<h1>Missão</h1>

				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknow. Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's standard dummy
					text ever since the 1500s, when an unknow.</p>
			</div>
		</Container>
	);
}

export default Card;