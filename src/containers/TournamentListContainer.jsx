import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import TournamentList from '../components/TournamentList';

import { getAllTournaments } from '../reducers/tournament';


class TournamentListContainer extends Component {
  static onSelectTournament(tournament) {
    browserHistory.push(`/tournaments/${tournament.id}`);
  }

  render() {
    return (
      <TournamentList
        onSelect={TournamentListContainer.onSelectTournament}
        tournaments={this.props.tournaments}
        />
    );
  }
}

TournamentListContainer.propTypes = {
  tournaments: PropTypes.array,
  onSelect: PropTypes.func,
};

const mapStateToProps = state => ({
  tournaments: getAllTournaments(state),
});

export default connect(mapStateToProps)(TournamentListContainer);
