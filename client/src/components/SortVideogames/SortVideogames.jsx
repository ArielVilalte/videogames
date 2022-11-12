import { Select, Option } from './SortVideogamesStyled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { sortAlphabetically, sortByRating } from '../../redux/actions';

const SortVideogames = () => {
    const dispatch = useDispatch();

    const handleChange = e => {
        e.preventDefault();
        if(e.target.value === 'A-Z' || e.target.value === 'Z-A') {
            return dispatch(sortAlphabetically(e.target.value));
        }
        if(e.target.value === 'high-low' || e.target.value === 'low-high') {
            return dispatch(sortByRating(e.target.value));
        }
    };

    return (
        <div>
            <Select defaultValue='default' onChange={e => handleChange(e)}>
                <Option value='default' disabled={true}>Sort</Option>
                <Option value='A-Z'>A - Z</Option>
                <Option value='Z-A'>Z - A</Option>
                <Option value='high-low'>Rate: high - low</Option>
                <Option value='low-high'>Rate: low - high</Option>
            </Select>
        </div>
    )
};

export default SortVideogames;