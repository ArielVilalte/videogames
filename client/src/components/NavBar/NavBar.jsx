import { Div, Button } from './NavBarStyled';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import FilterByGenre from '../FilterByGenre/FilterByGenre';
import FilterBySource from '../FilterBySource/FilterBySource';
import SortVideogames from '../SortVideogames/SortVideogames';
import { useDispatch } from 'react-redux';
import { filtarRateMayorCuatro } from '../../redux/actions';
 
const NavBar = () => {

    const dispatch = useDispatch();
    const handleClick = e => {
        dispatch(filtarRateMayorCuatro());
    };

    return (
        <Div>
            <SearchBar />
            <FilterByGenre />
            <FilterBySource />
            <SortVideogames />
            <Link to='/create'><Button>Create</Button></Link>
            <button onClick={e => handleClick(e)}>filtar rating mayor a 4</button>
        </Div>
    )
};

export default NavBar;