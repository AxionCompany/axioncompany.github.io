import styled from 'styled-components';

export const ContributorsContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const ContributorCard = styled.div`
    position: relative;
    width: 40%;
    height: auto;
    padding: 10px 0;
    margin: 10px 5%;
    img {
        position: relative;
        width: 110px;
        height: 110px;
        border-radius: 100%;
    }
`;