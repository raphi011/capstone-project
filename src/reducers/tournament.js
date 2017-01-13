const tournamentsById = [1, 2, 3, 4, 5, 6];

const tournaments = {
  1: { id: 1, league: 'A', date: '2017-01-13T19:12:43.454Z', type: 'M', club: 'Eibesbrunn', registrations: 0, size: 16 },
  2: { id: 2, league: 'A', date: '2016-12-21T19:12:43.454Z', type: 'F', club: 'Schmelz', registrations: 0, size: 32 },
  3: { id: 3, league: 'B', date: '2016-12-14T19:12:43.454Z', type: 'F', club: 'Podersdorf', registrations: 0, size: 16 },
  4: { id: 4, league: 'A', date: '2016-11-13T19:12:43.454Z', type: 'M', club: 'Schmelz', registrations: 0, size: 64 },
  5: { id: 5, league: 'B', date: '2016-11-06T19:12:43.454Z', type: 'M', club: 'Beach Volley Club', registrations: 0, size: 32 },
  6: { id: 6, league: 'C', date: '2016-11-06T19:12:43.454Z', type: 'M', club: 'Eibesbrunn', registrations: 0, size: 16 },
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

export const getAllTournaments = state => (
  state.tournamentsById.map(tId => state.tournaments[tId])
);
