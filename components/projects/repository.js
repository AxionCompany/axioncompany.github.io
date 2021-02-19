import { Col, Line, Row } from "../../styles/container"
import { H3, Text } from "../../styles/font"
import { Button } from "../buttons"
import { Project } from "./styles"
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Repository() {
  return (
    <Project>
      <Line>
        <Col col="5">
          <img src="https://github.githubassets.com/images/modules/open_graph/github-octocat.png"
            alt="repository logo" />
        </Col>
        <Col col="7">
          <H3>Projeto</H3>
          <Text>
            Nulla imperdiet enim quam. Nulla at ligula nec nulla efficitur lobortis.
          </Text>
        </Col>
      </Line>
      <Row space="10px"></Row>
      <Line style={{ justifyContent: "center" }}>
        <Button style={{ width: "180px", textAlign: "center" }} size="small" bgColor="#272727">
          Ver Projeto <FaExternalLinkAlt/> 
        </Button>
      </Line>
      <Row space="10px"></Row>
    </Project >
  )
}