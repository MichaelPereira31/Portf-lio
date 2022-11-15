import NavLink from './NavLink';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <ul>
        <NavLink tittle="Home" path="/" />
        <NavLink tittle="Projects" path="/projects" />
      </ul>
    </Container>
  );
}
