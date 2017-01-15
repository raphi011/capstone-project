import React, { PropTypes } from 'react';

import List from 'grommet/components/List';
import ListPlaceholder from 'grommet-addons/components/ListPlaceholder';

import TeamListItem from './TeamListItem';
import * as propTypes from '../propTypes';

const TeamList = ({ teams, tournamentFinished, ...props }) => {
  if (!teams || !teams.length) {
    return <ListPlaceholder emptyMessage="None" unfilteredTotal={0} filteredTotal={0} />;
  }

  return (
    <List {...props}>
      {teams.map((t, i) => {
        t.nr = i + 1;

        return (
          <TeamListItem key={i} team={t} tournamentFinished={tournamentFinished} />
        );
      })}
    </List>
  );
};

TeamList.propTypes = {
  teams: PropTypes.arrayOf(propTypes.team),
  tournamentFinished: PropTypes.bool,
};

export default TeamList;

