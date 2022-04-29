import React from 'react';
import { tooltipArray } from '../../../utils/mocks/tooltip.mock';
import Tooltip from '../../tooltip/tooltip.component';
import { Container } from './services.styles';

const Services: React.FC = () => {
  return (
    <Container>
      <p>oi</p>

      <div className="tooltip">
        {tooltipArray.map((tool) => (
          <Tooltip
            icon={tool.icon}
            telephone={tool.telephone}
            description={tool.description}
            email={tool.email}
          />
        ))}
      </div>
    </Container>
  );
};

export default Services;
