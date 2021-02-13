import { Container, Line } from '../../styles/container';
import { Button, ButtonGroup } from '../buttons';
import { NavCover, Subtitle, Title } from './styles';

export default function Cover() {
    return <NavCover>
        <Container>
            <Title>
                Somos
                <p>AXION</p>
            </Title>
            <Subtitle>
                <p>Somos Open Source</p>
            </Subtitle>
            <Line>
                <ButtonGroup style={{marginTop: "50px"}} justifyContent="center">
                    <Button  size="normal" outline="white">CONTRIBUIR</Button>
                    <Button textColor="black" size="normal" bgColor="white">SOBRE A AXION</Button>
                </ButtonGroup>
            </Line>
        </Container>
    </NavCover>
};