import styled from 'styled-components';

const colors = {
    border: '#0075FF',  // azul
    error: '#bb2929',   // dark red
    error2: '#F66060',  // light red
    success: '#1ed12d'  // light green
};

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Label = styled.label`
    display: block;
    cursor: pointer;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    color: #f5c150;
    font-family: cursive;
`;

const Input = styled.input`
    background: #fff;
    border: 3px solid transparent;
    border-radius: 3px;
    height: 3em;
    width: 20em;
    line-height: 45px;
    transition: .3s ease all;
    &: focus {
        border: 3px solid ${colors.border};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    }
`;

const ErrorMessage = styled.p`
    font-size: 18px;
    margin-bottom: 0px;
    margin-top: 1em;
    color: ${colors.error2};
    display: block;
`;

export {
    colors,
    Label,
    Input,
    ErrorMessage,
    Div
}