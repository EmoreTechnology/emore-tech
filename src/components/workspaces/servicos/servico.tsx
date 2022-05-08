import React from 'react';
import { Container } from './servicos.style';
import ServicosCard from '../../card sevicos/card-servicos.component';
import { servicosArray } from '../../../utils/mocks/servicos.mock';
import Message from '../../message-servicos/message.component';
import { messageArray } from '../../../utils/mocks/message.mock';

const Servicos: React.FC = () => {
  return (
    <Container>
      {messageArray.map((tool) => (
        <Message key={tool.title} title={tool.title} description={tool.description} />
      ))}

      <div className="content">
        {servicosArray.map((tool) => (
          <ServicosCard
            key={tool.icon}
            icon={tool.icon}
            title={tool.title}
            description={tool.description}
          />
        ))}
      </div>
    </Container>
  );
};

export default Servicos;
