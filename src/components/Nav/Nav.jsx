import { NavBar, Header, LogoLink, NavImg, Title } from './Nav.styled';
import NavItems from './NavItems/NavItems';
import Logo from '../../images/Logo.png';

export default function Nav() {
  return (
    <Header>
      <NavBar>
        <LogoLink to="/">
          <NavImg src={Logo} alt="SB" width="80" height="80" />
          <Title>SWAMP BROTHERHOOD</Title>
        </LogoLink>

        <NavItems />
      </NavBar>
    </Header>
  );
}
