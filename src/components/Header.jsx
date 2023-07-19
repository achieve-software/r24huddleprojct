import { Logo, StyledHeader } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
  
          <img src="./images/logo.svg" alt="" />
          <Button>Try it Free</Button>
        </Nav>

        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, fuga
          facere recusandae explicabo dicta ex ratione incidunt, non amet
          aperiam, culpa totam labore aliquam quis.
        </p>

        <Button bg="#ff0099" color="#fff">
          Get Started for free
        </Button>
        <img src="./images/illustration-mockups.svg" alt="" width="200px" />
      </Container>
    </StyledHeader>
  );
}
