import axios from 'axios';
import {
    GET_VIDEOGAMES, 
    GET_SEARCH_VIDEOGAMES, 
    CLEAR_VIDEOGAMES, 
    GET_GENRES, 
    FILTER_BY_GENRE, 
    RESTART_VIDEOGAMES, 
    FILTER_BY_SOURCE, 
    SORT_ALPHABETICALLY,
    SET_CURRENT_PAGE,
    SORT_BY_RATING,
    GET_PLATFORMS,
    GET_VIDEOGAME_DETAILS,
    CLEAR_VIDEOGAME_DETAILS,
    FILTRAR_RATE_MAYOR_CUATRO
} from '../types';


export const getVideogames = () => {
    return async function(dispatch) {
        const videogames = await axios('http://localhost:3001/videogames');
        return dispatch({
            type: GET_VIDEOGAMES,
            payload: videogames.data
        });
    };
};

export const getSearchVideogames = name => {
    return async function(dispatch) {
        const videogames = await axios(`http://localhost:3001/videogames?name=${name}`);
        return dispatch({
            type: GET_SEARCH_VIDEOGAMES,
            payload: videogames.data
        });
    };
};

export const clearVideogames = () => {
    return {
        type: CLEAR_VIDEOGAMES,
        payload: []
    }
};

export const getGenres = () => {
    return async function(dispatch) {
        const genres = await axios(`http://localhost:3001/genres`);
        return dispatch({
            type: GET_GENRES,
            payload: genres.data
        })
    };
};

export const filterByGenre = genre => {
    return {
        type: FILTER_BY_GENRE,
        payload: genre
    }
};

export const restartVideogames = () => {
    return {
        type: RESTART_VIDEOGAMES
    }
};

export const filterBySource = source => {
    return {
        type: FILTER_BY_SOURCE,
        payload: source
    }
};

export const sortAlphabetically = option => {
    return {
        type: SORT_ALPHABETICALLY,
        payload: option
    }
};

export const sortByRating = option => {
    return {
        type: SORT_BY_RATING,
        payload: option
    }
};

export const setCurrentPage = page => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page
    }
};

export const getPlatforms = () => {
    return {
        type: GET_PLATFORMS
    }
};

export const getVideogameDetails = id => {
    return async dispatch => {
        const videogameDetails = await axios(`http://localhost:3001/videogames/${id}`);
        return dispatch({
            type: GET_VIDEOGAME_DETAILS,
            payload: videogameDetails.data
        })
    };
};

export const cleanVideogameDetails = () => {
    return {
        type: CLEAR_VIDEOGAME_DETAILS
    }
};

export const filtarRateMayorCuatro = () => {
    return {
        type: FILTRAR_RATE_MAYOR_CUATRO
    }
}
