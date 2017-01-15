let currentId = 7;

export const createTournament = tournament => {
  const id = currentId++;
  tournament.id = id;

  return ({
    type: 'CREATE_TOURNAMENT',
    id,
    tournament,
  });
};

export const addTeam = (id, team) => ({
  type: 'ADD_TEAM',
  id,
  team,
});

export const deleteTournament = id => ({
  type: 'DELETE_TOURNAMENT',
  id,
});
