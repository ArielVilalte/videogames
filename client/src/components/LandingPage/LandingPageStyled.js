import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const Button = styled.button`
    width: 150px;
    height: 45px;
    font-family: fantasy;
    font-size: 1.4em;
    border: 2px solid #190f2a;
    border-radius: 10px;
    background-color: #f5c150;
    :hover {
        transition: 0.3s;
        box-shadow: 0 0 90px 5px rgba(187, 14, 255, 0.623);
    }
`;

const Img = styled.img`
    width: 600px;
    height: auto;
    border-radius: 50px;
`;

export {
    Div,
    Button,
    Img
};