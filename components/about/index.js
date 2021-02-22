import { Col, Container, Line, Section } from "../../styles/container";
import { H2, Text } from "../../styles/font";
import { Button } from "../buttons";
import Footer from "../footer";
import { Background } from "./styles";

export default function About() {
  return (
    <Background>
      <Section>
        <Container>
          <Line>
            <H2 style={{ color: "white" }}>SOBRE A AXION</H2>
          </Line>
          <Line>
            <Col col="6">
              <Text color="#fff">
                Sed euismod ipsum sed posuere ultrices. Maecenas feugiat sem at metus placerat, ac aliquet nunc blandit. Donec consequat ultrices lacus, in tincidunt lorem condimentum dapibus. Phasellus aliquet vel felis id faucibus. Nulla porta nibh et odio porta, malesuada interdum nulla lacinia. Proin accumsan tortor ligula, nec egestas libero mollis eget. Praesent sagittis metus non ligula convallis sollicitudin. Maecenas sagittis vehicula nunc, a suscipit erat tempus molestie. Cras accumsan elit ut augue facilisis vulputate.
            </Text>
              <Line>
                <Button href="https://axion.group/" size="large" outline={"#fff"} rounded="true" textColor="#fff">
                  Saiba Mais
              </Button>
              </Line>
            </Col>
            <Col col="6">
              <img src="/big-logo-white.svg" alt="Axion Open Source" style={{ position: "relative", margin: "10%", width: "80%", height: "auto" }} />
            </Col>
          </Line>
        </Container>
      </Section>
      <Footer />
    </Background >
  );
}