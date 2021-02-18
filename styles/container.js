import styled from 'styled-components';

export const Container = styled.div`
    width: 75%;
    margin: 0 12.5%;
`;

export const Line = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
`;

export const Col = styled.div`
    position:relative;
    width: calc(8% * ${({ col }) => col ? col : 1});
    height: auto;
    margin: 0 0.3%;
`;

export const Row = styled.span`
    position: relative;
    background: transparent;
    margin: ${({ space }) => space ? space : '20px'} 0;
    &:before
    { content: '';
        heigth: 100%;
        width: 50px;
    }
`;

export const Section = styled.section`
    position: relative;
    padding: 100px 0;
`;