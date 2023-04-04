import { 
    GET_VIDEOGAMES, 
    GET_SEARCH_VIDEOGAMES, 
    CLEAR_VIDEOGAMES, 
    GET_GENRES, 
    FILTER_BY_GENRE, 
    RESTART_VIDEOGAMES, 
    FILTER_BY_SOURCE,
    SORT_ALPHABETICALLY,
    SORT_BY_RATING,
    GET_PLATFORMS,
    GET_VIDEOGAME_DETAILS,
    CLEAR_VIDEOGAME_DETAILS
} from '../types';

const initialState = {
    allVideogames: [],
    videogames: [],
    filteredVideogames: [],
    sortedVideogames: [],
    genres: [],
    platforms: [],
    videogameDetails: {},
    errorMessage: ''
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload,
                allVideogames: action.payload
            };
        case GET_SEARCH_VIDEOGAMES:
            if(typeof(action.payload) === 'string') {
                return {
                    ...state,
                    errorMessage: action.payload
                } 
            }
            return {
                ...state,
                videogames: [...action.payload]
            }
        case CLEAR_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload
            }
        case GET_GENRES: 
            return {
                ...state,
                genres: [...action.payload]
            }
        case FILTER_BY_GENRE:
            if(action.payload === 'All genres') {
                if(state.sortedVideogames.length) {
                    return {
                        ...state,
                        errorMessage: '',
                        videogames: state.sortedVideogames
                    }
                }
                return {
                    ...state,
                    errorMessage: ''
                }
            };
            if(state.sortedVideogames.length) {
                const filteredGames = state.sortedVideogames.filter(game => game.genres.includes(action.payload));
                if(!filteredGames.length) return {
                    ...state,
                    errorMessage: 'There are no games with that genre'
                }   
                return {
                    ...state,
                    videogames: filteredGames,
                    filteredVideogames: filteredGames,
                    errorMessage: ''
                }
            }
            const filteredGames = state.videogames.filter(game => game.genres.includes(action.payload));
            if(!filteredGames.length) return {
                ...state,
                errorMessage: 'There are no games with that genre'
            }   
            return {
                ...state,
                videogames: filteredGames,
                filteredVideogames: filteredGames,
                errorMessage: ''
            }
        case RESTART_VIDEOGAMES:
            return {
                ...state,
                videogames: state.allVideogames
            }
        case FILTER_BY_SOURCE:
            if(action.payload === 'both') return {...state, videogames: state.allVideogames, errorMessage: ''};
            if(action.payload === 'DATABASE') {
                const filterGames = state.videogames.filter(game => game.created);
                if(!filterGames.length) return {...state, errorMessage: 'There are no created games yet'};
                return {
                    ...state,
                    videogames: filterGames,
                    errorMessage: ''
                };
            }
            const filterGames = state.allVideogames.filter(game => !game.created);
            return {
                ...state,
                videogames: filterGames,
                errorMessage: ''
            };
        case SORT_ALPHABETICALLY:
            if(action.payload === 'A-Z') {
                if(state.filteredVideogames.length) {
                    const sortedVideogames = state.filteredVideogames.map(game => ({...game, name: game.name.toLowerCase()}));
                    sortedVideogames.sort((a, b) => {
                        if(a.name > b.name) return 1;
                        if(a.name < b.name) return -1;
                        return 0;
                    });
                    return {
                        ...state,
                        videogames: sortedVideogames
                    } 
                };
                
                const sortedVideogames = state.videogames.map(game => ({...game, name: game.name.toLowerCase()}));
                sortedVideogames.sort((a, b) => {
                    if(a.name > b.name) return 1;
                    if(a.name < b.name) return -1;
                    return 0;
                });
                return {
                    ...state,
                    videogames: sortedVideogames,
                    sortedVideogames: sortedVideogames
                }
            };
            if(action.payload === 'Z-A') {
                if(state.filteredVideogames.length) {
                    const sortedVideogames = state.filteredVideogames.map(game => ({...game, name: game.name.toLowerCase()}));
                    sortedVideogames.sort((b, a) => {
                    if(a.name > b.name) return 1;
                    if(a.name < b.name) return -1;
                    return 0;
                });
                    return {
                        ...state,
                        videogames: sortedVideogames
                    } 
                }
                const sortedVideogames = state.videogames.map(game => ({...game, name: game.name.toLowerCase()}));
                sortedVideogames.sort((b, a) => {
                    if(a.name > b.name) return 1;
                    if(a.name < b.name) return -1;
                    return 0;
                });
                return {
                    ...state,
                    videogames: sortedVideogames,
                    sortedVideogames: sortedVideogames
                }
            };
            return {...state, videogames: state.videogames};
        case SORT_BY_RATING:
            if(action.payload === 'high-low') {
                const copyGames = state.videogames.slice(0, state.allVideogames.length);
                const sortGames = copyGames.sort((a, b) => {
                    if(a.rating < b.rating) return 1;
                    if(a.rating > b.rating) return -1;
                    return 0;
                })
                return {
                    ...state,
                    videogames: sortGames
                }
            } 
            if(action.payload === 'low-high') {
                const copyGames = state.videogames.slice(0, state.allVideogames.length);
                const sortGames = copyGames.sort((a, b) => {
                    if(a.rating > b.rating) return 1;
                    if(a.rating < b.rating) return -1;
                    return 0;
                })
                return {
                    ...state,
                    videogames: sortGames
                }
            } 
            return {
                ...state,
                videogames: state.videogames
            }
        case GET_PLATFORMS:
            const allPlatforms = state.allVideogames.map(game => game.platforms).flat();
            const platforms = [...new Set(allPlatforms)];
            return {
                ...state,
                platforms: platforms
            }
        case GET_VIDEOGAME_DETAILS:
            if(action.payload.created) {
                const gameDetails = {
                    ...action.payload,
                    platforms: action.payload.platforms.split(", ")
                }
                return {
                    ...state,
                    videogameDetails: gameDetails
                }
            }
            if(action.payload === 'No existe ningún juego con ese ID') {
                return {
                    ...state,
                    errorMessage: action.payload
                }
            }
            const gameDetails = {
                ...action.payload,
                description: action.payload.description.slice(3, action.payload.description.length - 4)
            }
            
            return {
                ...state,
                videogameDetails: gameDetails
            }
        case CLEAR_VIDEOGAME_DETAILS:
            return {
                ...state,
                videogameDetails: {},
                errorMessage: ''
            }
        default: 
            return {
                ...state
            }
    };
};

export default rootReducer;