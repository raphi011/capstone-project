
const playersById = [1, 2, 3, 4, 5, 6, 7, 8];

export const players = {
  1: { id: 1, name: 'Raphael G.' },
  2: { id: 1, name: 'Lukas A.' },
  3: { id: 1, name: 'Christoph G.' },
  4: { id: 1, name: 'Floran S.' },
  5: { id: 1, name: 'Dominik T.' },
  6: { id: 1, name: 'Stephan C.' },
  7: { id: 1, name: 'Thomas W.' },
  8: { id: 1, name: 'Richard B.' },
};

export const playersByIdReducer = (state = playersById, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const playersReducer = (state = players, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/* SELECTORS */

export const getPlayer = (state, id) => (
  state.players[id]
);

export const getAllPlayers = state => (
  state
    .playersById
    .map(pId => state.players[pId])
);
