import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormInput from '../FormInput/FormInput';
import axios from 'axios';
import { getPlatforms, getVideogames, getGenres } from '../../redux/actions';
import { Link } from 'react-router-dom';
import gameCreatedImg from '../../success.png';
import { 
    Form, 
    DivContainer, 
    Div, 
    Select, 
    H4, 
    DivSelect, 
    Span, 
    DivOptionsContainer, 
    DivOption, 
    DeleteButton, 
    Img, 
    H2, 
    Button, 
    CreateButton 
} from './CreateVideogameStyled.js';

const CreateVideogame = () => {
    const dispatch = useDispatch();
    const videogames = useSelector(state => state.allVideogames);
    const genres = useSelector(state => state.genres);
    const allPlatforms = useSelector(state => state.platforms);

    useEffect(() => {
        if(!videogames.length) return dispatch(getVideogames());    // solicito los juegos y los generos en caso de ir directo a la url /create
        if(!genres.length) return dispatch(getGenres());
        if(!allPlatforms.length) return dispatch(getPlatforms());
        validateForm();
    });

    const regExp = {
        name: /^[a-zA-Z\s]{4,20}$/,
        description: /^[a-zA-Z\s]{20,}$/
    }

    const [state, setState] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        platforms: [],
        genresIds: []
    });
    
    const [gameCreated, setGameCreated] = useState(false);

    const [validated, setValidated] = useState(false);
    
    const [selectedOptions, setSelectedOptions] = useState({
        genres: [],
        platforms: []
    });

    const [errorMessage, setErrorMessage] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        error: ''
    });

    const handleName = e => {
        setState({
            ...state,
            name: e.target.value
        });
        if(regExp.name.test(e.target.value)) {
            setErrorMessage({
                ...errorMessage,
                name: ''
            });
        } else {
            setErrorMessage({
                ...errorMessage,
                name: 'El nombre debe tener entre 4 y 20 caracteres sin símbolos o números'
            });
        }
    }

    const handleDescription = e => {
        setState({
            ...state,
            description: e.target.value
        });
        if(regExp.description.test(e.target.value)) {
            setErrorMessage({
                ...errorMessage,
                description: ''
            });
        } else {
            setErrorMessage({
                ...errorMessage,
                description: 'La descripción debe tener un mínimo de 20 caracteres'
            });
        }
    };

    const handleRating = e => {
        setState({
            ...state,
            rating: e.target.value
        });
        if(e.target.value >= 1 && e.target.value <= 5) {
            setErrorMessage({
                ...errorMessage,
                rating: ''
            });
        } else {
            setErrorMessage({
                ...errorMessage,
                rating: 'Solo números enteros o decimales entre 1 y 5'
            });
        }
    };

    const handleReleased = e => {
        setState({
            ...state,
            released: e.target.value
        });
        const validYear = e.target.value.split('-');    // year-month-day
        if(parseInt(validYear[0]) <= 2022) {
            setErrorMessage({
                ...errorMessage,
                released: ''
            });
        } else {
            setErrorMessage({
                ...errorMessage,
                released: 'El año no puede ser mayor al año en curso'
            });
        };
    };

    const handleGenres = e => {
        if(!state.genresIds.find(genre => genre === parseInt(e.target.value))) {
            setState({
                ...state,
                genresIds: [...state.genresIds, parseInt(e.target.value)]
            });
        };
    };

    const handlePlatforms = e => {
        if(!state.platforms.find(platform => platform === e.target.value)) {
            setState({
                ...state,
                platforms: [...state.platforms, e.target.value]
            });
        };
    };

    const handleSelectedOptions= (e, option) => {   // option puede llegar como obj para genre o como string para platforms
        if(e.target.title === 'platforms') {
            if(!selectedOptions.platforms.find(platform => platform === option)) {
                setSelectedOptions({
                    ...selectedOptions,
                    platforms: [...selectedOptions.platforms, option]
                });
            };
        } else {
            if(!selectedOptions.genres.find(genre => genre.name === option.name)) {
                setSelectedOptions({
                    ...selectedOptions,
                    genres: [...selectedOptions.genres, {name: option.name, id: option.id}]
                });
            };
        };
    };

    const handleDeleteOption = e => {
        e.preventDefault();
        if(e.target.name === 'genre') {
            let newGenres = selectedOptions.genres.filter(genre => genre.name !== e.target.title);
            setSelectedOptions({
                ...selectedOptions,
                genres: newGenres
            });
            newGenres = state.genresIds.filter(genre => genre !== parseInt(e.target.value));
            setState({
                ...state,
                genresIds: newGenres
            });
        };
        if(e.target.name === 'platform') {
            let newPlatforms = selectedOptions.platforms.filter(platform => platform !== e.target.value);
            setSelectedOptions({
                ...selectedOptions,
                platforms: newPlatforms
            });
            newPlatforms = state.platforms.filter(platform => platform !== e.target.value);
            setState({
                ...state,
                platforms: newPlatforms
            });
        };
    };

    const validateForm = () => {
        if(state.name 
            && state.description
            && state.released 
            && state.rating 
            && state.genresIds.length 
            && state.platforms.length 
            && !errorMessage.name 
            && !errorMessage.description 
            && !errorMessage.released 
            && !errorMessage.rating) return setValidated(true);
        setValidated(false);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(validated) {
            axios.post('http://localhost:3001/videogames/creategame', state)
            .then(res => setGameCreated(res.data))
            .catch(res => setErrorMessage({...errorMessage, error: res})); 
        };
    };

    return (
        <DivContainer>
            <Div>
                {
                    !errorMessage.error.length ? 
                    gameCreated === false ?
                    <Form onSubmit={e => handleSubmit(e)}>
                        <FormInput 
                        type="text" 
                        handleChange={e => handleName(e)} 
                        nameState={state.name} 
                        name="name" 
                        label="name:" 
                        placeHolder="name..."
                        errorMessage={errorMessage.name}
                        />
                        <FormInput 
                        type="text" 
                        handleChange={handleDescription}
                        nameState={state.description} 
                        name="description" 
                        label="description:" 
                        placeHolder="description..."
                        errorMessage={errorMessage.description}
                        />
                        <FormInput 
                        type="date"
                        handleChange={handleReleased}
                        nameState={state.released}
                        name="released"
                        label="released: "
                        errorMessage={errorMessage.released}
                        />
                        <FormInput 
                        type="number"
                        handleChange={handleRating}
                        nameState={state.rating}
                        name="rating"
                        label="rating:"
                        placeHolder="rating..."
                        errorMessage={errorMessage.rating}
                        />
                        <H4>Genres: </H4>
                        <DivSelect>
                            {
                                genres.length ? 
                                <Select defaultValue="Genres" title="genres" onChange={e => handleGenres(e)}>
                                    {
                                        genres.map(genre => (
                                            <option key={genre.id} value={genre.id} title="genres" disabled={state.genresIds.length === 5} onClick={e => handleSelectedOptions(e, genre)}>
                                                {genre.name}
                                            </option>
                                        ))
                                    }
                                </Select> 
                                : <Span>Loading genres...</Span>
                            }
                            <DivOptionsContainer>
                                {
                                    selectedOptions.genres.length ? 
                                    selectedOptions.genres.map((genre, index) => (
                                    <DivOption key={index}>
                                        <H4>{genre.name}</H4>
                                        <DeleteButton name="genre" value={genre.id} title={genre.name} onClick={e => handleDeleteOption(e)}>Delete</DeleteButton>
                                    </DivOption>
                                    ))
                                    : null
                                }
                            </DivOptionsContainer>
                        </DivSelect>
                        <H4>Platforms: </H4>
                        <DivSelect>
                            {
                                allPlatforms.length ?
                                <Select defaultValue="Platforms" title="platforms" onChange={e => handlePlatforms(e)}>
                                    {
                                        allPlatforms.map(platform => (
                                            <option key={platform} value={platform} title="platforms" disabled={state.platforms.length === 5} onClick={e => handleSelectedOptions(e, platform)}>
                                            {platform}
                                            </option>
                                        ))
                                    }
                                </Select> 
                                : <Span>Loading platforms...</Span>
                            }
                            <DivOptionsContainer>
                                {
                                    selectedOptions.platforms.length ? 
                                    selectedOptions.platforms.map((platform, index) => (
                                    <DivOption key={index}>
                                        <H4>{platform}</H4>
                                        <DeleteButton name="platform" value={platform} onClick={e => handleDeleteOption(e)}>Delete</DeleteButton>
                                    </DivOption>
                                    )) 
                                    : null
                                }
                            </DivOptionsContainer>
                        </DivSelect>
                        <CreateButton type="submit" disabled={!validated}>Create game</CreateButton>
                    </Form>
                    : <div>
                        <Img src={gameCreatedImg} alt="Game created successfully" />
                        <H2>Game created successfully!</H2>
                    </div>
                    : <span>{errorMessage.error}</span>
                }
                <Link to="/videogames"><Button>Go home</Button></Link>
            </Div>
        </DivContainer>
    );
};

export default CreateVideogame;