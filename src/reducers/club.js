const clubsByName = ['eibesbrunn', 'schmelz', 'podersdorf', 'beach-volley-club'];

const clubs = {
  'eibesbrunn': { normalizedName: 'eibesbrunn', name: 'Eibesbrunn', location: { latitude: 48.35981, longitude: 16.490749999999935 } },
  'schmelz': { normalizedName: 'schmelz', name: 'Schmelz', location: { latitude: 48.20381580000001, longitude: 16.320078299999977 } },
  'podersdorf': { normalizedName: 'podersdorf', name: 'Podersdorf', location: { latitude: 47.8544248, longitude: 16.837116000000037 } },
  'beach-volley-club': { normalizedName: 'beach-volley-club', name: 'Beach Volley Club', location: { latitude: 48.24409989999999, longitude: 16.4120944 } },
};

export const clubsByNameReducer = (state = clubsByName, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const clubsReducer = (state = clubs, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const getClub = (state, normalizedName) => (
  state.clubs[normalizedName]
);

export const getAllClubs = state => (
  state.clubsByName.map(normalizedName => state.clubs[normalizedName])
);
