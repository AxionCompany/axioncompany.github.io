import { Navbar as Nav, NavLinks} from './styles.js';


export default function Navbar() {
    return (
        <Nav>
            <img src="/logo.svg" alt="Axion Open Source" />
            <NavLinks>
                <li>
                    Início
                </li>
                <li>
                    Projetos
                </li>
                <li>
                    Time
                </li>
                <li>
                    Sobre
                </li>
                <li>
                    Axion Jobs
                </li>
            </NavLinks>

        </Nav>
    );
}