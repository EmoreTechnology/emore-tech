import React from 'react';
import { Container } from './card.styles';
export interface AboutUsProps {
    description: string;
    title: string;
    icon: string;
}

const Card: React.FC<AboutUsProps> = ({ description, icon, title}) => {
	return (
		<Container>
			<div>
				<div className="section">
					<img src={icon} alt="" />
					<h1>{title}</h1>
				</div>
				<p>{description}</p>
			</div>
		</Container>
	);
}

export default Card;