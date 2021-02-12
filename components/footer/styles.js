import styled from 'styled-components';

export const Footer = styled.footer`
    background: #2e2e2e;
    position: relative;
    bottom: 0;
    height: 200px;
    width: 100%;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px;
`;

export const Links = styled.ul`
    position: relative;
    width: auto;
    height: auto;
    margin: 5px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    li a {
        text-decoration: none;
        color: #fff;
    }
`;