import React from 'react';

import { Container } from './message.component.style';

interface MessageProps {
  title: string;
  description?: string;
}

const Message: React.FC<MessageProps> = ({ description, title }) => {
  return (
    <Container>
      <p>{title}</p>
      <h1>{description}</h1>
    </Container>
  );
};

export default Message;
