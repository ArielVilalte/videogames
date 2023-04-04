import { DivContainer, Div, Ul, NavLinkStyled, H2 } from './HomeStyled';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import { getVideogames, getGenres } from '../../redux/actions';
import Loading from '../Loading/Loading';

function Home() {
    const dispatch = useDispatch();
    const videogames = useSelector(state => state.videogames);
    const genres = useSelector(state => state.genres);
    const errorMessage = useSelector(state => state.errorMessage);

    useEffect(() => {
        dispatch(getVideogames());
        !genres.length && dispatch(getGenres());
    }, [dispatch, genres]);

    const [pagination, setPagination] = useState({
        indexFirstGame: 0,
        indexLastGame: 15,
        currentPage: 1,
    })

    const currentGames = videogames.slice(pagination.indexFirstGame, pagination.indexLastGame);

    return (
        <DivContainer>
            {videogames.length ? <NavBar /> : null}
            <Div>
                {errorMessage.length ? <H2>{errorMessage}</H2> :
                    videogames.length ?
                        <Ul>
                            {currentGames.map((game, index) => {
                                return <NavLinkStyled to={`/videogames/${game.id}`} key={index}>
                                    <Card name={game.name} image={game.image} genres={game.genres} />
                                </NavLinkStyled>
                            })}
                        </Ul> 
                    : <Loading />
                }
            </Div>
            {!errorMessage.length ? <Pagination indexFirstGame={pagination.indexFirstGame} indexLastGame={pagination.indexLastGame} currentPage={pagination.currentPage} setPagination={setPagination} totalGames={videogames.length} /> : null}
        </DivContainer>
    );
}

export default Home;