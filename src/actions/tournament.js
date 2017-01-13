let currentId = 0;

export const createTournament = tournament => ({
  type: 'CREATE_TOURNAMENT',
  id: currentId++,
  tournament,
});

export const deleteTournament = id => ({
  type: 'DELETE_TOURNAMENT',
  id,
});
