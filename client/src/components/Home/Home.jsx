import { DivContainer, Div, Ul, NavLinkStyled, H2 } from './HomeStyled';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import { getVideogames, getGenres } from '../../redux/actions';
import Pagination from '../Pagination/Pagination';

const Home = () => {
    const dispatch = useDispatch();
    const videogames = useSelector(state => state.videogames);
    const genres = useSelector(state => state.genres);
    const errorMessage = useSelector(state => state.errorMessage);
    const pagination = useSelector(state => state.pagination);
    
    useEffect(() => {
        dispatch(getVideogames());
        !genres.length && dispatch(getGenres());
    }, [dispatch, genres]);

    const currentGames = videogames.slice(pagination.indexOfFirstGame, pagination.indexOfLastGame);

    return (
        <DivContainer>
            {videogames.length ? <NavBar /> : null}
            <Div>
                {
                    errorMessage.length ? <H2>{errorMessage}</H2> :
                    videogames.length ? 
                    <Ul>
                            {
                                currentGames.map((game, index) => {
                                    return <NavLinkStyled  to={`/videogames/${game.id}`} key={index}>
                                        <Card name={game.name} image={game.image} genres={game.genres}/>
                                    </NavLinkStyled>
                                })  
                            }
                    </Ul> : 
                <Loading />
                } 
            </Div>
            {!errorMessage.length ? <Pagination /> : null}
        </DivContainer>
    )
};

export default Home;