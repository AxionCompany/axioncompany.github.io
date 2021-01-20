import { Footer as Foot, Links } from './styles.js';

export default function Footer() {

    return (
        <Foot>
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

            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel Logo" />
            </a>
        </Foot>
    );
}