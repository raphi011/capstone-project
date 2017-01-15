import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import notification from './notification';
import { tournamentsByIdReducer, tournamentsReducer } from './tournament';
import { clubsByNameReducer, clubsReducer } from './club';
import { playersByIdReducer, playersReducer } from './player';

export default combineReducers({
  players: playersReducer,
  playersById: playersByIdReducer,
  tournaments: tournamentsReducer,
  tournamentsById: tournamentsByIdReducer,
  clubs: clubsReducer,
  clubsByName: clubsByNameReducer,
  notification,
  routing: routerReducer,
});
