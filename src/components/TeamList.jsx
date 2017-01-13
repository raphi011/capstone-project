import React, { PropTypes } from 'react';

import List from 'grommet/components/List';

import TeamListItem from './TeamListItem';

const TeamList = ({ teams, tournamentFinished, ...props }) => (
  <List {...props}>
    {teams.map((t, i) => <TeamListItem key={i} team={t} tournamentFinished={tournamentFinished} />)}
  </List>
);

TeamList.propTypes = {
  teams: PropTypes.array,
  tournamentFinished: PropTypes.bool,
};

export default TeamList;

