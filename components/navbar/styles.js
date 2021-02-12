import styled from 'styled-components';

export const Navbar = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    height: auto;
    color: #fff;
    display: flex;
    flex-direction: row;
    padding: 30px 8% 0 8%;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    img {
        height:  40px;
        width: 185px;
    }
`;

export const NavLinks = styled.ul`
    position: relative;
    list-style:none;
    color: white;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0;
    margin: 0;
    
    li {
        margin: 0 12px;
    }
`;