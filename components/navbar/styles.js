import styled from 'styled-components';

export const Navbar = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    height: auto;
    color: #fff;
    display: flex;
    flex-direction: row;
    padding: 30px 8% 30px 8%;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    background: ${({ sticky }) => sticky ? `
        linear-gradient(111.74deg, #EF1E82 1.33%, rgba(239, 30, 130, 0) 89.79%),
        linear-gradient(72.5deg, #152082 7.6%, rgba(255, 255, 255, 0) 111.72%),
        linear-gradient(290.5deg, #08C3DD 2.97%, rgba(255, 255, 255, 0) 80.45%),
        linear-gradient(247.57deg, #FB8700 13.67%, rgba(255, 255, 255, 0) 127.71%);
    ` : 'transparent'
    };
    box-shadow: ${({ sticky }) => sticky ? '1px 2px 2px rgba(0,0,0,.4)' : 'none'};
    transition:0.4s all;
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