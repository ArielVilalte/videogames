import { Div, Button } from './NavBarStyled';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import FilterByGenre from '../FilterByGenre/FilterByGenre';
import FilterBySource from '../FilterBySource/FilterBySource';
import SortVideogames from '../SortVideogames/SortVideogames';
 
const NavBar = () => {
    return (
        <Div>
            <SearchBar />
            <FilterByGenre />
            <FilterBySource />
            <SortVideogames />
            <Link to='/create'><Button>Create</Button></Link>
        </Div>
    )
};

export default NavBar;