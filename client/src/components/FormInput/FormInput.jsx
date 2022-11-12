import React from 'react';
import { Label, Input, ErrorMessage, Div } from './FormInputStyled';

const FormInput = ({type, handleChange, nameState, name, label, placeHolder, errorMessage }) => {
    return (
        <Div>
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} id={name} name={name} value={nameState} onChange={e => handleChange(e)} placeholder={placeHolder} />
            {errorMessage.length !== 0 && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Div>
    );
};

export default FormInput;