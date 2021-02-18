import { Col, Line, Row } from "../../styles/container"
import { H3, Text } from "../../styles/font"
import { Button } from "../buttons"
import { Project } from "./styles"


export default function Repository() {
  return (
    <Project>
      <Line>
        <Col col="5">
          <img src="https://i.pinimg.com/originals/f0/65/8e/f0658ebc5f872768239cd3ab2f7ac051.jpg"
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
      <Line style={{justifyContent: "center"}}>
          <Button style={{width: "180px", textAlign: "center"}} size="small" bgColor="#272727">Ver Projeto</Button>
      </Line>
      <Row space="10px"></Row>
    </Project >
  )
}