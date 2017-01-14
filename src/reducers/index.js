import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import notification from './notification';
import { tournamentsByIdReducer, tournamentsReducer } from './tournament';
import { clubsByNameReducer, clubsReducer } from './club';

export default combineReducers({
  tournaments: tournamentsReducer,
  tournamentsById: tournamentsByIdReducer,
  clubs: clubsReducer,
  clubsByName: clubsByNameReducer,
  notification,
  routing: routerReducer,
});
