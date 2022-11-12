import styled from 'styled-components';

const Input = styled.input`
    width: 15em;
    height: 2em;
    border: 0px solid transparent;
    border-radius: 5px;
    background-color: #dfdfdf;
    outline: none;
    margin-right: 10px;
    &: focus {
        box-shadow: 5px 0px 30px rgba(163, 163, 163, 0.4);
    }
    font-family: cursive;
`;

const Img = styled.img`
    height: 1.5em;
    cursor: pointer;
    :active {
        height: 1.4em;
    }
`;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    width: 15em;
`;

export {
    Input,
    Img,
    Div
};