import { Col, Container, Line, Row, Section } from '../../styles/container.js';
import { Footer as Foot, Links } from './styles.js';
import { FaCartPlus, FaGooglePlus, FaGooglePlusG, FaGoogleWallet, FaInstagram, FaLinkedin, FaMailBulk, FaMailchimp } from 'react-icons/fa';
import { Text } from '../../styles/font.js';

export default function Footer() {
  return (
    <Foot>
      <Container>
        <Line>
          <Col col="4">
            <Links>
              <li>
                <a href="" >
                  Home
                     </a>
              </li>
              <li>
                <a href="" >
                  Projects
                     </a>
              </li>
              <li>
                <a href="" >
                  Team
                     </a>
              </li>
              <li>
                <a href="" >
                  About Axion
                     </a>
              </li>
            </Links>
            <Links>
              <li>
                <a href="" >
                  Join us
                 </a>
              </li>
            </Links>
          </Col>

          <Col col="4">
            <li style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <FaInstagram style={{ fontSize: "40px", margin: "5px" }} />
              <a href="" target="_blank">/axion.cx</a>

            </li>
            <li style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <FaLinkedin style={{ fontSize: "40px", margin: "5px" }} />
              <a href="" target="_blank">/axion.cx</a>
            </li>
            <li style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <FaGooglePlusG style={{ fontSize: "40px", margin: "5px" }} />
              axion@axion.company
            </li>
          </Col>

          <Col col="4">
            <Text color="white">
              São Paulo- SP, Brasil
            </Text>
          </Col>
        </Line>
        <Line style={{ margin: "20px", justifyContent: "center" }}>
          
          {new Date().getFullYear()} &copy;&nbsp; <a href="https://axion.company">AXION</a>
        </Line>
      </Container>
    </Foot>
  );
}