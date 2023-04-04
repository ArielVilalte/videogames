import { Div, Button2 } from './PaginationStyled';
import React from 'react';

const Pagination = ({indexFirstGame, indexLastGame, currentPage, setPagination, totalGames}) => {                     
    const handlePage = e => {
        if(e.target.name === 'next') {
            setPagination({
                indexFirstGame: indexLastGame,
                indexLastGame: indexLastGame + 15,
                currentPage: currentPage + 1
            });
        }
        if(e.target.name === 'prev') {
            setPagination({
                indexFirstGame: indexFirstGame - 15,
                indexLastGame: indexFirstGame,
                currentPage: currentPage - 1
            });
        }
    };
    return (
        <Div>   
            <div>
                <Button2 name='prev' currentPage={currentPage} onClick={e => handlePage(e)}>Prev</Button2>
            </div>
            <div>
                <h3 style={{color: "red"}}>{currentPage}</h3>
            </div>
            <div>
                <Button2 name='next' currentPage={currentPage} totalGames={totalGames} onClick={e => handlePage(e)}>Next</Button2>
            </div>
        </Div>
    );
};

export default Pagination;