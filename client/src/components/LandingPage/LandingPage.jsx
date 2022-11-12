import { Div, Button, Img } from './LandingPageStyled';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.jpg';

const LandingPage = () => {
    return (
        <Div>
            <Img src={logo} alt='logo'/>
            <Link to='/videogames'><Button>home</Button></Link>
        </Div>
    )
};

export default LandingPage;