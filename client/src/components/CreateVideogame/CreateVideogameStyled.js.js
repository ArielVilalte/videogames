import styled, { css } from 'styled-components';
import background from '../../images/background.jpg';
import createVideogameImg from '../../images/createVideogame.jpg';

const DivContainer = styled.div`  
    //background-color: #D3D3D3;
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Div = styled.div`
    background-image: url(${createVideogameImg});
    width: 66vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 20px;
`;

const Form = styled.form`
    width: 50vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const Select = styled.select`
    height: 3em;
    width: 20em;
    background-color: #dfdfdf;
    border: 3px solid transparent;
    border-radius: 3px;
`;

const Input = styled.input`

`;

const H4 = styled.h4`
    color: #f5c150;
    font-family: cursive;
    
`;

const DivSelect = styled.div`
    width: 50em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Span = styled.span`
    color: #f5c150;
    margin-left: 1em;
`;

const DivOptionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 1em;
    width: 50em;
    height: 2.5em;
    margin-top: 5px;
`;

const DivOption = styled.div`
    margin-right: 10px;
    background-color: #582c85;
    border: 1px solid transparent;
    border-radius: 5px;
    width: 10em;
    height: 2.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const DeleteButton = styled.button`
    width: 4em;
    height: 2em;
    background-color: #e05350;
    border: 1px solid #e05350;
    border-radius: 5px;
    margin-right: 5px;
    color: white;
    font-family: fantasy;
    cursor: pointer;
`;

const Img = styled.img`
    width: 20em;
`;

const H2 = styled.h2`
    color: #4c8412;
`;

const Button = styled.button`
    cursor: pointer;
    width: 100px;
    height: 30px;
    font-family: cursive;
    font-size: 1em;
    font-weight: lighter;
    border: 2px solid #190f2a;
    border-radius: 5px;
    background-color: #f5c150;
    :hover {
        transition: 0.3s;
        box-shadow: 0 0 90px 5px rgba(187, 14, 255, 0.623);
    }
`;

const CreateButton = styled.button`
    width: 100px;
    height: 30px;
    color: black;
    font-family: cursive;
    font-size: 1em;
    font-weight: lighter;
    border: 2px solid #190f2a;
    border-radius: 5px;
    background-color: grey;
    ${props => !props.disabled && css`
        :hover {
            transition: 0.3s;
            box-shadow: 0 0 90px 5px rgba(187, 14, 255, 0.623);
        }
        background-color: #f5c150;
        cursor: pointer;
    `}
`;

export {
    DivContainer,
    Div,
    Form,
    Select,
    Input,
    H4,
    DivSelect,
    Span,
    DivOptionsContainer,
    DivOption,
    DeleteButton,
    Img,
    H2,
    Button,
    CreateButton
}