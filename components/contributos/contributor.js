import { Col, Line, Row } from "../../styles/container";
import { Text } from "../../styles/font";
import { Button } from "../buttons";
import { ContributorCard } from "./styles";
import { FaGithubAlt } from "react-icons/fa";
export default function Contributor() {

  return (
    <ContributorCard>
      <Line style={{ justifyContent: "center" }}>
        <Col col="5">
          <img src="https://github.githubassets.com/images/modules/open_graph/github-octocat.png"
            alt="repository logo" />
        </Col>
        <Col col="7">
          <Text>
            Nulla imperdiet enim quam. Nulla at ligula nec nulla efficitur lobortis.
          </Text>
          <Line>
            <Row space="10px"></Row>
            <Button target="_blank" href="http://youtube.com" style={{ textAlign: "center" }} size="small" bgColor="#272727">
              <FaGithubAlt style={{fontSize: '14pt'}}/>
              <span style={{marginRight: "10px"}}></span>
              Visitar perfil
            </Button>
            <Row space="10px"></Row>
          </Line>
        </Col>
      </Line>
    </ContributorCard>
  );
}