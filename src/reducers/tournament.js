import haversine from 'haversine';

const tournamentsById = [1, 2, 3, 4, 5, 6];

const tournaments = {
  1: { id: 1, league: 'A', date: '2017-01-13T19:12:43.454Z', type: 'M', club: 'Eibesbrunn', registrations: 0, size: 16, location: { latitude: 48.35981, longitude: 16.490749999999935 } },
  2: { id: 2, league: 'A', date: '2016-12-21T19:12:43.454Z', type: 'F', club: 'Schmelz', registrations: 0, size: 32, location: { latitude: 48.20381580000001, longitude: 16.320078299999977 } },
  3: { id: 3, league: 'B', date: '2016-12-14T19:12:43.454Z', type: 'F', club: 'Podersdorf', registrations: 0, size: 16, location: { latitude: 47.8544248, longitude: 16.837116000000037 } },
  4: { id: 4, league: 'A', date: '2016-11-13T19:12:43.454Z', type: 'M', club: 'Schmelz', registrations: 0, size: 64, location: { latitude: 48.20381580000001, longitude: 16.320078299999977 } },
  5: { id: 5, league: 'B', date: '2016-11-06T19:12:43.454Z', type: 'M', club: 'Beach Volley Club', registrations: 0, size: 32, location: { latitude: 48.24409989999999, longitude: 16.4120944 } },
  6: { id: 6, league: 'C', date: '2016-11-06T19:12:43.454Z', type: 'M', club: 'Eibesbrunn', registrations: 0, size: 16, location: { latitude: 48.24409989999999, longitude: 16.4120944 } },
};

export const tournamentsByIdReducer = (state = tournamentsById, action) => {
  const newState = [...state];

  switch (action.type) {
    case 'CREATE_TOURNAMENT':
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

export const getNearTournaments = (state, position) => {
  const threshold = 20; // KM

  return state
    .tournamentsById
    .map(tId => state.tournaments[tId])
    .filter(t => haversine(t.location, position, { threshold, unit: 'km' }));
};

export const getAllTournaments = state => (
  state.tournamentsById.map(tId => state.tournaments[tId])
);
