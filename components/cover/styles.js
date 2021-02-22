import styled from 'styled-components';

export const NavCover = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    left: 0%;
    right: 0%;
    top: 0%;
    background: 
        linear-gradient(111.74deg, #EF1E82 1.33%, rgba(239, 30, 130, 0) 89.79%), 
        linear-gradient(72.5deg, #152082 7.6%, rgba(255, 255, 255, 0) 111.72%),
        linear-gradient(290.5deg, #08C3DD 2.97%, rgba(255, 255, 255, 0) 80.45%),
        linear-gradient(247.57deg, #FB8700 13.67%, rgba(255, 255, 255, 0) 127.71%);
    z-index: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h1`
    position: relative;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    color: white;
    margin: 0;

    p {
        font-weight: bold;
        font-size: 100px;
        margin: 0;
    }
`;

export const Subtitle = styled.h2`
    position: relative;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: white;
`;