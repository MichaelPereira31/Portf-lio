import { SessionTittle } from '../SessionTittle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

export function Experiences() {
  return (
    <Container>
      <SessionTittle tittle="10 Months" description="of experience" />

      <section>
        <ExperienceItem
          tittle="2022"
          subtitle="Dev Back-end N1"
          description="API development using NodeJS, TypeScript, Typeorm, Prisma, Express and
          other technologies"
        />
        <ExperienceItem
          tittle="2022"
          subtitle="Dev Back-end N2"
          description="API development using NodeJS, TypeScript, Typeorm, Prisma, Express and
          other technologies"
        />
      </section>
    </Container>
  );
}
