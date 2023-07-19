import { Logo, StyledHeader,Nav,Image } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Image src="./images/logo.svg" alt="" />
          <Button>Try it Free</Button>
        </Nav>
        <Flex>
        <div>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
            fuga facere recusandae explicabo dicta ex ratione incidunt, non amet
            aperiam, culpa totam labore aliquam quis.
          </p>

          <Button bg="#ff0099" color="#fff">
            Get Started for free
          </Button>
        </div>
        <Image src="./images/illustration-mockups.svg" alt=""/>
        </Flex>
      </Container>
    </StyledHeader>
  );
}
