import { ItemContainer } from './styles';

interface ExperienceItemProps {
  tittle: string;
  subtitle: string;
  description: string;
}
export default function ExperienceItem({
  tittle,
  subtitle,
  description
}: ExperienceItemProps) {
  return (
    <ItemContainer>
      <div>
        <h1>{tittle}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
