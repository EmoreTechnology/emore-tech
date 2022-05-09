import React from 'react';
import { Container } from './tooltip.styles';

interface TooltipProps {
  icon: string;
  telephone?: string;
  email?: string;
  description?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ description, icon, email, telephone }) => {
  return (
    <Container>
      <img src={icon} alt=""></img>

      <span />
      <p>{telephone || email}</p>
      <p>{description}</p>
    </Container>
  );
};

export default Tooltip;
