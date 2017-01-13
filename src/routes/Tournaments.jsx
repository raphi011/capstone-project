import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Button from 'grommet/components/Button';
import Add from 'grommet/components/icons/base/AddCircle';
import Layer from 'grommet/components/Layer';

import TournamentList from '../containers/TournamentListContainer';
import NewTournamentForm from '../containers/NewTournamentFormContainer';

import { showNewNotification } from '../actions/notification';

class Tournaments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNewTournament: false,
    };

    this.showNewTournamentModal = this.showNewTournamentModal.bind(this);
    this.closeNewTournamentModal = this.closeNewTournamentModal.bind(this);
    this.onNewTournament = this.onNewTournament.bind(this);
  }

  onNewTournament(tournament) {
    this.props.showNotification('ok', 'Successfully created new tournament');

    this.closeNewTournamentModal();
  }

  closeNewTournamentModal() {
    this.setState({ showNewTournament: false });
  }

  showNewTournamentModal() {
    this.setState({ showNewTournament: true });
  }

  render() {
    let newTournamentModal;

    if (this.state.showNewTournament) {
      newTournamentModal = (
        <Layer onClose={this.closeNewTournamentModal} closer>
          <Box pad={{ vertical: 'small' }}>
            <NewTournamentForm onSubmit={this.onNewTournament} />
          </Box>
        </Layer>
      );
    }

    return (
      <Box pad="medium" full>
        <Header justify="between">
          <Title>Tournaments</Title>
          <Button
            icon={<Add />}
            label="Create"
            href="#"
            onClick={this.showNewTournamentModal}
            />
        </Header>
        <TournamentList onSelect={this.onSelectTournament} />
        {newTournamentModal}
      </Box >
    );
  }
}

Tournaments.propTypes = {
  showNotification: PropTypes.func,
};

export default connect(null, { showNotification: showNewNotification })(Tournaments);
