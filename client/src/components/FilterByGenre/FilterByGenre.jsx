import { Select } from './FilterByGenreStyled';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByGenre, restartVideogames } from '../../redux/actions';

const FilterByGenre = () => {
    const genres = useSelector(state => state.genres);
    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch(restartVideogames());
        dispatch(filterByGenre(e.target.value));
    };

    return (
        <div>
            <Select onChange={e => handleChange(e)}>
                <option key='All genres' value='All genres'>All genres</option>
                {
                    genres.length && 
                    genres.map(genre => {
                        return <option key={genre.id} value={genre.name}>
                            {genre.name}
                        </option>
                    })
                }
            </Select>
        </div>        
    )
};

export default FilterByGenre;