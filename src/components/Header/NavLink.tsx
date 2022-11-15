import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';

interface Props {
  tittle: string;
  path: string;
}

export default function NavLink({ tittle, path }: Props) {
  const router = useRouter();

  const isActive = router.pathname === path;

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{tittle}</a>
      </Link>
    </NavLinkContainer>
  );
}
