import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import TournamentList from '../components/TournamentList';

import { getAllTournaments, getNearTournaments } from '../reducers/tournament';


class TournamentListContainer extends Component {
  static onSelectTournament(tournament) {
    browserHistory.push(`/tournaments/${tournament.id}`);
  }

  render() {
    return (
      <TournamentList
        onSelect={TournamentListContainer.onSelectTournament}
        tournaments={this.props.tournaments}
        addHeaders={this.props.addHeaders}
        />
    );
  }
}

TournamentListContainer.propTypes = {
  tournaments: PropTypes.array,
  onSelect: PropTypes.func,
  addHeaders: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => {
  const { position } = ownProps;

  const tournaments = position ? getNearTournaments(state, position) : getAllTournaments(state);

  return ({ tournaments });
};

export default connect(mapStateToProps)(TournamentListContainer);
