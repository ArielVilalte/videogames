import styled, { css } from 'styled-components';

const Button = styled.button`
    cursor: pointer;
    width: 50px;
    height: 25px;
    margin: 10px 5px 5px 5px;
    border: 2px solid #190f2a;
    border-radius: 5px;
    color: #180e28;
    background-color: #f5c150;
    font-family: cursive;
    font-weight: lighter;
    font-size: 1em;
    :active {background-color: grey}
`;

const Button2 = styled.button`
    cursor: pointer;
    width: 50px;
    height: 25px;
    margin: 10px 10px 10px 10px;
    border: 2px solid #190f2a;
    border-radius: 5px;
    background-color: #f5c150;
    font-family: cursive;
    font-weight: lighter;
    font-size: 1em;
    :active {background-color: grey}
    visibility: hidden;
    ${props => props.currentPage > 1 && props.name === 'prev' && css`
        visibility: visible;
    `}
        
    ${props => props.currentPage < Math.ceil(props.totalGames/15) && props.name === 'next' && css`
        visibility: visible;
    `}
`;
            
const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin-bottom: 10px;
`;

export {
    Div,
    Button,
    Button2
};