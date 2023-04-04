import { Input, Img, Div } from './SearchBarStyled';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchVideogames, clearVideogames } from '../../redux/actions';
import lupa from '../../images/lupa.png';

const SearchBar = () => {
    const [videogameName, setVideogameName] = useState('');
    const dispatch = useDispatch();

    const handleChange = e => {
        e.preventDefault();
        setVideogameName(e.target.value);
    };

    const handleClick = e => {
        e.preventDefault();
        clearVideogames(dispatch);
        dispatch(getSearchVideogames(videogameName));
        setVideogameName('');
    };

    return (
        <Div>
            <Input 
                value={videogameName}
                type='text'
                onChange={e => handleChange(e)}
                placeholder='Search...'
            />
            <Img src={lupa} alt='Search' onClick={e => handleClick(e)}/>
        </Div>
    )
};

export default SearchBar;