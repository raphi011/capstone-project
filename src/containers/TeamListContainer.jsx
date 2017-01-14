import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

import TeamList from '../components/TeamList';
import * as propTypes from '../propTypes';

class TeamListContainer extends Component {
  static onSelectPlayer(user) {
    browserHistory.push(`/users/${user.name}`);
  }

  render() {
    const { teams } = this.props;

    return (
      <TeamList
        teams={teams}
        tournamentFinished={false}
        {...this.props}
        />
    );
  }
}

TeamListContainer.propTypes = {
  teams: PropTypes.arrayOf(propTypes.team),
};

export default TeamListContainer;
