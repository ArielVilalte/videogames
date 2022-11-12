import React from 'react';
import { Div, Img, H4, ImgContainer } from './CardStyled';

const Card = (props) => {
    return (
        <Div>
            <ImgContainer>
                <Img src={props.image} alt={props.name} title={props.name} />
            </ImgContainer>
            <H4>{props.name}</H4>
            <h3>{props.genres.join(' - ')}</h3>
        </Div>
    )
};

export default Card;