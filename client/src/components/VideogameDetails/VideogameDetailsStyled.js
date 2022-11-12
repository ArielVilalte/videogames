import styled, { keyframes } from 'styled-components';

const DivContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const glower = keyframes`
    0% {
        background-position: 0 0;
    }
    25% {
        background-position: 200% 0;
    }
    50% {
        background-position: 400% 0;
    }
    75% {
        background-position: 200% 0;
    }
    100% {
        background-position: 0 0;
    }
`;

const Div = styled.div`
    color: rgb(245, 193, 80);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    gap: 0.5rem;
    transition: 0.6s;
    width: 50em;
    height: auto;
    margin-bottom: 20px;
    margin-right: 20px;
    margin-left: 20px;
    background: linear-gradient(to bottom, #321c4b 0%, #170e27 100%);
    :before {
        content: "";
        position: absolute;
        left: -2px;
        top: -2px;
        background: linear-gradient(
        45deg,
        #f74df7,
        #ff004cd9,
        #3b89ff,
        #3713ff,
        #ad27ad,
        #bd2681,
        #6512b9,
        #ff3300de,
        #904bff
        );
        background-size: 400%;
        border-radius: 10px;
        width: calc(100% + 5px);
        height: calc(100% + 5px);
        z-index: -1;
        animation: ${glower} 20s linear infinite;
    }
`;

const Img = styled.img`
    border-radius: 10px;
    width: 30em;
    height: auto;
`;

const Span = styled.span`
    color: #ff0000;
    font-family: fantasy;
    font-size: 2em;
    background-color: #f5c150;
    border-radius: 5px;
`;

const DivError = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 400px;
`;

const ErrorImg = styled.img`
    height: 20em;
    width: auto;
`;

const GoHomeButton = styled.button`
    cursor: pointer;
    width: 100px;
    height: 30px;
    font-family: cursive;
    font-size: 1em;
    font-weight: lighter;
    border: 2px solid #190f2a;
    border-radius: 10px;
    background-color: #f5c150;
    :hover {
        transition: 0.3s;
        box-shadow: 0 0 90px 5px rgba(187, 14, 255, 0.623);
    }
`;

const Div2 = styled.div`
    width: 720px;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
`;

export {
    DivContainer,
    Div,
    Img,
    Span,
    DivError,
    ErrorImg,
    GoHomeButton,
    Div2
};