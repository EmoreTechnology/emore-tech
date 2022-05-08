import React from 'react';
import { tooltipArray } from '../../../utils/mocks/tooltip.mock';
import ContactForm from '../../form-contact/form-contact.component';
import Tooltip from '../../tooltip/tooltip.component';
import { Container } from './services.styles';

const Services: React.FC = () => {
  return (
    <Container>
      <div className="tooltip">
        {tooltipArray.map((tool) => (
          <Tooltip
            key={tool.icon}
            icon={tool.icon}
            telephone={tool.telephone}
            description={tool.description}
            email={tool.email}
          />
        ))}
      </div>

      <div className="contact">
        <ContactForm />
      </div>
    </Container>
  );
};

export default Services;
