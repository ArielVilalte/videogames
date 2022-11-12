import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 80%;
    margin-top: 10px;
    padding: 10px;
    position: relative;
    background: linear-gradient(to bottom, #321c4b 0%, #170e27 100%);
`;

const Button = styled.button`
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

export {
    Div,
    Button
};