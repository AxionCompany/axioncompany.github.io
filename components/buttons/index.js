import styled from "styled-components";

export const Button = styled.a`
    cursor: pointer;
    padding: ${({ size }) => size === 'tiny' ? `11px` :
        size === 'small' ? '14px' :
            size === 'normal' ? '18px' :
                size === 'large' ? '24px' : '11px'
    };
    border: ${({ outline }) => outline ?
        `2px solid ${outline}` : 'none'
    };
    background-color: ${({ bgColor }) => bgColor ? bgColor : 'transparent'};
    border-radius: ${(rounded) => rounded ? '10px' : '0'};
    color: ${({textColor}) => textColor ? textColor : 'white'};
    margin: 5px;
    
    &:hover {
        transition: 0.4s all;
        opacity: 0.3;
    }
`;

export const ButtonGroup = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${({direction}) => direction ? direction : 'row'};
    justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'flex-start'};
    width: 100%;
    height: auto;
`;