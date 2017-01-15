import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as propTypes from '../propTypes';
import { getAllPlayers } from '../reducers/player';
import { addTeam } from '../actions/tournament';

import TournamentSignupForm from '../components/TournamentSignupForm';

class TournamentSignupFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: undefined,
      player2: undefined,
      players1: props.players,
      players2: props.players,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onSearchPlayer = this.onSearchPlayer.bind(this);
    this.onSetPlayer1 = this.onSetPlayer1.bind(this);
    this.onSetPlayer2 = this.onSetPlayer2.bind(this);
  }

  onSetPlayer2(player2) {
    const players1 = this.props.players.filter(p => p !== player2);

    this.setState({ player2, players1 });
  }

  onSetPlayer1(player1) {
    const players2 = this.props.players.filter(p => p !== player1);

    this.setState({ player1, players2 });
  }

  onSubmit(e) {
    e.preventDefault();

    const { player1, player2 } = this.state;
    const { tournamentId } = this.props;

    const newTeam = {
      player1,
      player2,
      points: (Math.floor(Math.random() * (400 - 1) + 1)),
    };

    this.props.addTeam(tournamentId, newTeam);

    if (this.props.onSubmit) this.props.onSubmit();
  }

  onSearchPlayer(player, filter) {
    const players = !filter ? this.props.players :
      this.props.players
        .filter(p => p.name.includes(filter) &&
          ((player === 1 && p !== this.state.player2) ||
            (player === 2 && p !== this.state.player1)));

    if (player === 1) this.setState({ players1: players });
    else this.setState({ players2: players });
  }

  render() {
    const { player1, player2, players1, players2 } = this.state;
    const onSubmit = (player1 && player2) ? this.onSubmit : null;

    return (
      <TournamentSignupForm
        onSubmit={onSubmit}
        player1={player1}
        player2={player2}
        onSetPlayer1={this.onSetPlayer1}
        onSetPlayer2={this.onSetPlayer2}
        onSearchPlayer1={filter => this.onSearchPlayer(1, filter.target.value)}
        onSearchPlayer2={filter => this.onSearchPlayer(2, filter.target.value)}
        players1={players1}
        players2={players2}
        />
    );
  }
}

TournamentSignupFormContainer.propTypes = {
  onSubmit: PropTypes.func,
  addTeam: PropTypes.func,
  tournamentId: PropTypes.number,
  players: PropTypes.arrayOf(propTypes.player).isRequired,
};

const mapStateToProps = state => ({
  players: getAllPlayers(state).map(p => ({ ...p, label: p.name, value: p.id })),
});


export default connect(mapStateToProps, { addTeam })(TournamentSignupFormContainer);
