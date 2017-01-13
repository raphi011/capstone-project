import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import notification from './notification';
import { tournamentsByIdReducer, tournamentsReducer } from './tournament';

export default combineReducers({
  tournaments: tournamentsReducer,
  tournamentsById: tournamentsByIdReducer,
  notification,
  routing: routerReducer,
});
