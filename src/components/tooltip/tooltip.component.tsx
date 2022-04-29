import React from 'react';
import { Container } from './tooltip.styles';

interface TooltipProps {
  icon: string;
  telephone?: number;
  email?: string;
  description?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ description, icon, email, telephone }) => {
  return (
    <Container>
      <p>{icon}</p>
      <span />
      <p>{telephone || email}</p>
      <p>{description}</p>
    </Container>
  );
};

export default Tooltip;
