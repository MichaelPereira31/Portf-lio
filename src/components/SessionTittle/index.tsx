import { ReactNode } from 'react';
import { Container } from './styles';

interface SessionTittleProps {
  tittle: string | ReactNode;
  description?: string | ReactNode;
}

export function SessionTittle({ tittle, description }: SessionTittleProps) {
  return (
    <Container>
      <h1>#{tittle}</h1>
      {description && <h2>{description}</h2>}
    </Container>
  );
}
