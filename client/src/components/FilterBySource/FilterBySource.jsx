import { Select, Option } from './FilterBySourceStyled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { filterBySource } from '../../redux/actions';

const FilterBySource = () => {
    const dispatch = useDispatch();

    const handleChange = e => {
        e.preventDefault();
        dispatch(filterBySource(e.target.value));
    };

    return (
        <div>
            <Select onChange={e => handleChange(e)}>
                <Option value='both'>Api & Database</Option>
                <Option value='API' >Api</Option>
                <Option value='DATABASE' >Database</Option>
            </Select>
        </div>
    );
};

export default FilterBySource;