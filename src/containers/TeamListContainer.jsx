import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

import TeamList from '../components/TeamList';

const teams = [
  { nr: 1, player1: 'Thomas M.', player2: 'Raphael G.', points: 300 },
  { nr: 2, player1: 'Dominik K.', player2: 'Richard M.', points: 256 },
  { nr: 3, player1: 'David A.', player2: 'Kang Z.', points: 240 },
  { nr: 4, player1: 'Christoph T.', player2: 'Lukas S.', points: 158 },
];

class TeamListContainer extends Component {
  static onSelectPlayer(user) {
    browserHistory.push(`/users/${user.name}`);
  }

  render() {
    return (
      <TeamList
        teams={teams}
        tournamentFinished={false}
        {...this.props}
        />
    );
  }
}

// TeamListContainer.propTypes = {
// };

export default TeamListContainer;
