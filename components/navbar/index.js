import React, { useEffect, useState } from 'react';
import { Navbar as Nav, NavLinks } from './styles.js';



export default function Navbar() {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        const header = document.getElementById("myHeader");
        const headerOffset = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > headerOffset) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);

    return (
        <Nav id="myHeader" sticky={sticky}>
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