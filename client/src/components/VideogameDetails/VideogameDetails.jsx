import { DivContainer, Div, Img, Span, DivError, ErrorImg, GoHomeButton, Div2 } from './VideogameDetailsStyled';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogameDetails, cleanVideogameDetails } from '../../redux/actions';
import Loading from '../Loading/Loading';
import siteNotFoundImg from '../../errorImg.png';

const VideogameDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getVideogameDetails(id));
        return () => dispatch(cleanVideogameDetails());
    }, [dispatch, id]);

    const videogameDetails = useSelector(state => state.videogameDetails);
    const errorMessage = useSelector(state => state.errorMessage);
    return (
        <DivContainer>
            {
                !errorMessage.length ?
                Object.keys(videogameDetails).length ?
                <Div>
                    <h3>{videogameDetails.name}</h3>
                    <Img src={videogameDetails.image} alt={videogameDetails.name} />
                    <h3>Released: {videogameDetails.released}</h3>
                    <h3>Rate: {videogameDetails.rating}</h3>
                    Description: {videogameDetails.description}
                    <h2>Genres:</h2>
                    <Div2>
                        {videogameDetails.genres.map((genre, index) => {
                            return <h3 key={index}>{genre}</h3>
                        })}
                    </Div2>
                    <h2>Platforms:</h2>
                    <Div2>
                        {videogameDetails.platforms.map((platform, index) => {
                            return <h3 key={index}> {platform}</h3>
                        })}
                    </Div2>
                </Div>
                : <Loading />
                : <DivError>
                    <ErrorImg alt='site not found' src={siteNotFoundImg} />
                    <Span>{errorMessage}</Span>
                </DivError>
            }
            <Link to='/videogames'><GoHomeButton>Go home</GoHomeButton></Link>
        </DivContainer>
    )
};

export default VideogameDetails;