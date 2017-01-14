let currentId = 0;

export const createTournament = tournament => {
  const id = currentId++;
  tournament.id = id;

  return ({
    type: 'CREATE_TOURNAMENT',
    id,
    tournament,
  });
};

export const deleteTournament = id => ({
  type: 'DELETE_TOURNAMENT',
  id,
});
