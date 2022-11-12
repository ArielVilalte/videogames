import { Div } from './AppStyled';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import VideogameDetails from './components/VideogameDetails/VideogameDetails';
import CreateVideogame from './components/CreateVideogame/CreateVideogame';

function App() {
  return (
    <Div>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/videogames' component={Home} />
      <Route exact path='/videogames/:id' render={({ match }) => <VideogameDetails id={match.params.id} />} />
      <Route exact path='/create' component={CreateVideogame} />
    </Div>
  )
};

export default App;
