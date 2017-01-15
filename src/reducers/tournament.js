import haversine from 'haversine';

import { players } from './player';

const tournamentsById = [1, 2, 3, 4, 5, 6];

const teams = {
  1: { player1: players[1], player2: players[2] },
  2: { player1: players[3], player2: players[4] },
  3: { player1: players[5], player2: players[6] },
  4: { player1: players[7], player2: players[8] },
};

const tournaments = {
  1: { id: 1, league: 'A', date: '2017-01-13T19:12:43.454Z', type: 'M', teams: [teams[1], teams[2], teams[3], teams[4]], club: { normalizedName: 'eibesbrunn', name: 'Eibesbrunn', location: { latitude: 48.35981, longitude: 16.490749999999935 } }, size: '16' },
  2: { id: 2, league: 'A', date: '2016-12-21T19:12:43.454Z', type: 'F', teams: [], club: { normalizedName: 'schmelz', name: 'Schmelz', location: { latitude: 48.20381580000001, longitude: 16.320078299999977 } }, size: '32' },
  3: { id: 3, league: 'B', date: '2016-12-14T19:12:43.454Z', type: 'F', teams: [], club: { normalizedName: 'podersdorf', name: 'Podersdorf', location: { latitude: 47.8544248, longitude: 16.837116000000037 } }, size: '16' },
  4: { id: 4, league: 'A', date: '2016-11-13T19:12:43.454Z', type: 'M', teams: [], club: { normalizedName: 'schmelz', name: 'Schmelz', location: { latitude: 48.20381580000001, longitude: 16.320078299999977 } }, size: '64' },
  5: { id: 5, league: 'B', date: '2016-11-06T19:12:43.454Z', type: 'M', teams: [], club: { normalizedName: 'beach-volley-club', name: 'Beach Volley Club', location: { latitude: 48.24409989999999, longitude: 16.4120944 } }, size: '32' },
  6: { id: 6, league: 'C', date: '2016-11-06T19:12:43.454Z', type: 'M', teams: [], club: { normalizedName: 'eibesbrunn', name: 'Eibesbrunn', location: { latitude: 48.35981, longitude: 16.490749999999935 } }, size: '16' },
};

export const tournamentsByIdReducer = (state = tournamentsById, action) => {
  const newState = [...state];

  switch (action.type) {
    case 'CREATE_TOURNAMENT':
      console.log('creating new tournament');
      newState.push(action.id);

      return newState;
    case 'DELETE_TOURNAMENT':
    default:
      return state;
  }
};

export const tournamentsReducer = (state = tournaments, action) => {
  let newState;

  switch (action.type) {
    case 'CREATE_TOURNAMENT':
      return {
        ...state,
        [action.id]: {
          ...action.tournament,
        },
      };
    case 'DELETE_TOURNAMENT':
      newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export const getTournament = (state, id) => (
  state.tournaments[id]
);

export const getAllTournaments = state => (
  state
    .tournamentsById
    .map(tId => state.tournaments[tId])
    .sort((a, b) => new Date(b.date) - new Date(a.date))
);

export const getNearTournaments = (state, position) => {
  const threshold = 20; // KM

  return getAllTournaments(state)
    .filter(t => haversine(t.club.location, position, { threshold, unit: 'km' }));
};
