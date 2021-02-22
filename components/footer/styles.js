import styled from 'styled-components';

export const Footer = styled.footer`
    position: relative;
    bottom: 0;
    height: auto;
    width: 100%;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px 0;

    li {
        list-style: none;

        a {
            margin: 10px 0;
        }
    }
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
    font-size: 20px;
    font-weight: bold;
    li {
        margin: 10px 0;
    }
`;