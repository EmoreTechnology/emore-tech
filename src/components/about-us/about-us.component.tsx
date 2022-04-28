import React from 'react';
import Card from '../card/card.component';
import { Container } from './about-us.styles';
import {AboutUsTitle} from '../../utils/mocks/about-us.mock';

const AboutUs: React.FC = () => {
	return (
		<Container>
			{AboutUsTitle.map((i) =>
                (<Card
				key={i.description}
				icon={i.icon}
				title={i.title}
				description={i.description}
				/>
				)
            )}


		</Container>
	);
}

export default AboutUs;