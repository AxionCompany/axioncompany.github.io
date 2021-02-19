import { Container, Line, Section } from "../../styles/container";
import { H2 } from "../../styles/font";
import Contributor from "./contributor";
import { ContributorsContainer } from './styles';

export default function Contributors() {

  return (
    <Section>
      <Container>
        <H2 style={{ marginBottom: "60px" }}>CONTRIBUIDORES</H2>
        <Line>
          <ContributorsContainer>
            <Contributor />
            <Contributor />
            <Contributor />
            <Contributor />
            <Contributor />
            <Contributor />
            <Contributor />
            <Contributor />
          </ContributorsContainer>
        </Line>
      </Container>

    </Section>
  );
}