/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/pessoa.webp';

export function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Foro Michael" />
      <div>
        <TextContainer>
          <h1>Hello</h1>
          <h2>My name is Michael</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//My presentation</span>
            <span className="purple"> Infos </span>
            {'\u007B'}
            <div>
              Name: <span className="blue">Michael</span>
            </div>
            <div>
              Last name: <span className="blue">Pereira</span>
            </div>
            {'\u007B'}
          </CodeItem>

          <CodeItem>
            <span className="comment">//Academic Formation</span>
            <span className="purple"> Infos </span>
            {'\u007B'}
            <div>
              Technician:{' '}
              <span className="blue">Computing for the internet</span>
            </div>
            <div>
              Bachelor degree: <span className="blue">Information Systems</span>
            </div>
            {'\u007B'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
