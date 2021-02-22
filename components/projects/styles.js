import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const AxionProjectImage = styled.img`
    position: relative;
    width: 90%;
    height: auto;
    margin: 5%;
`;


export const Project = styled.div`
    position: relative;
    width: 46%;
    height: auto;
    margin: 20px 2%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 1px rgba(0,0,0,.3);

    img {
        position: relative;
        margin: 5%;
        background: #cecece;
        width: 120px;
        height: 120px;
        border-radius: 100px;
        border: none;
    }
`;
