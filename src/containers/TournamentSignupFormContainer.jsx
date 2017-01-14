import React, { Component, PropTypes } from 'react';

import * as propTypes from '../propTypes';

import TournamentSignupForm from '../components/TournamentSignupForm';

class TournamentSignupFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: '',
      player2: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onSearchPlayer = this.onSearchPlayer.bind(this);
    this.onSetPlayer1 = this.onSetPlayer1.bind(this);
    this.onSetPlayer2 = this.onSetPlayer2.bind(this);
  }

  onSetPlayer2(player2) {
    this.setState({ player2 });
  }

  onSetPlayer1(player1) {
    this.setState({ player1 });
  }

  onSubmit() {
    if (this.props.onSubmit) this.props.onSubmit();
  }

  onSearchPlayer() {
    //
  }

  render() {
    const { player1, player2 } = this.state;
    const onSubmit = (player1 && player2) ? this.onSubmit : null;

    return (
      <TournamentSignupForm
        onSubmit={onSubmit}
        player1={player1}
        player2={player2}
        onSetPlayer1={this.onSetPlayer1}
        onSetPlayer2={this.onSetPlayer2}
        onSearchPlayer1={this.onSearchPlayer}
        onSearchPlayer2={this.onSearchPlayer}
        />
    );
  }
}

TournamentSignupFormContainer.propTypes = {
  onSubmit: PropTypes.func,
};

export default TournamentSignupFormContainer;
