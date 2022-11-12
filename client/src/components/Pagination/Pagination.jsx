import { Div, Button, Button2 } from './PaginationStyled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/actions';

const Pagination = () => {
    const dispatch = useDispatch();
    const videogames = useSelector(state => state.videogames);
    const pagination = useSelector(state => state.pagination);

    const totalGames = videogames.length;
    const gamesPerPage = 15;
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
        pageNumbers.push(i);
    };                          

    let page = pagination.currentPage;

    const handlePage = e => {
        if(e.target.name === 'next') {
            page++;
            return dispatch(setCurrentPage(page));
        }
        if(e.target.name === 'prev') {
            page--;
            return dispatch(setCurrentPage(page));
        }
        dispatch(setCurrentPage(e.target.value));
    };

    return (
        <Div>   
            <div>
                <Button2 name='prev' currentPage={pagination.currentPage} onClick={e => handlePage(e)}>Prev</Button2>
            </div>
            <div>
                {   
                    pageNumbers.map((page, index) => {
                        return <Button key={index} value={page} onClick={e => handlePage(e)}>{page}</Button>
                    })
                }
            </div>
            <div>
                <Button2 name='next' currentPage={pagination.currentPage} pageNumbers={pageNumbers.length} onClick={e => handlePage(e)}>Next</Button2>
            </div>
        </Div>
    );
};

export default Pagination;