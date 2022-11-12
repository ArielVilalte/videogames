import { Div, Img, H1 } from './LoadingStyled';
import React from 'react';
import gif from '../../loading.gif';

const Loading = () => {
    return (
        <Div>
            <Img src={gif} alt='loading...' />
            <H1>Loading...</H1>
        </Div>
    )
};

export default Loading;