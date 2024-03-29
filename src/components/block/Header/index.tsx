import {
  Container,
  Content,
  Navigation,
  Link,
  SubNav,
  BrandLink,
  Logo,
  Title,
} from "./styles";
import { CircleButton } from "components/element";
import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <Container>
      <Content>
        <Navigation>
          <Link to="/filmes">Filmes</Link>
          <Link to="/series">Series</Link>
        </Navigation>
        <BrandLink href="/">
          <Logo />
          <Title>Cinejump!</Title>
        </BrandLink>
        <SubNav>
          <CircleButton text="Search">
            <BiSearch size="70%" color="white" />
          </CircleButton>
          <CircleButton text="Profile">
            <CgProfile size="70%" color="white" />
          </CircleButton>
        </SubNav>
      </Content>
    </Container>
  );
};

export default Header;
