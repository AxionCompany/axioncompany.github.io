import { Section, Col, Container, Line } from "../../styles/container";
import { H2, Text } from "../../styles/font";
import Repository from "./repository";
import { AxionProjectImage, ProjectsContainer } from "./styles";


export default function Projects() {
  return (
    <Section>
      <Container style={{ marginBottom: "100px" }}>
        <H2 style={{ marginBottom: "60px" }}>PROJETOS</H2>
        <Line>
          <Col col="6">
            <AxionProjectImage
              styled="position: relative; width: 100%"
              src="https://github.githubassets.com/images/modules/open_graph/github-octocat.png"
              alt="Axion is open source to"
            />
          </Col>
          <Col col="6">
            <Text style={{ justifyContent: "center", alignContent: "center" }}>
              Sed euismod ipsum sed posuere ultrices. Maecenas feugiat sem at metus placerat, ac aliquet nunc blandit. Donec consequat ultrices lacus, in tincidunt lorem condimentum dapibus. Phasellus aliquet vel felis id faucibus. Nulla porta nibh et odio porta, malesuada interdum nulla lacinia. Proin accumsan tortor ligula, nec egestas libero mollis eget. Praesent sagittis metus non ligula convallis sollicitudin. Maecenas sagittis vehicula nunc, a suscipit erat tempus molestie. Cras accumsan elit ut augue facilisis vulputate.
            </Text>
          </Col>
        </Line>
      </Container>
      <Container>
        <ProjectsContainer>
          <Repository />
          <Repository />
          <Repository />
          <Repository />
          <Repository />
        </ProjectsContainer>
      </Container>
    </Section>
  );
}