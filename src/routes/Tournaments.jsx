import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Button from 'grommet/components/Button';
import Add from 'grommet/components/icons/base/AddCircle';
import Layer from 'grommet/components/Layer';
import CheckBox from 'grommet/components/CheckBox';

import TournamentList from '../containers/TournamentListContainer';
import NewTournamentForm from '../containers/NewTournamentFormContainer';

import { showNewNotification } from '../actions/notification';

class Tournaments extends Component {
  constructor(props) {
    super(props);

    const showNearMe = navigator.geolocation !== undefined;

    this.state = {
      showNewTournament: false,
      showNearMe,
      nearMe: false,
      position: null,
    };

    this.showNewTournamentModal = this.showNewTournamentModal.bind(this);
    this.closeNewTournamentModal = this.closeNewTournamentModal.bind(this);
    this.showPosition = this.showPosition.bind(this);
    this.onNearMeChange = this.onNearMeChange.bind(this);
  }

  showPosition(position) {
    this.setState({ position: position.coords });
  }

  closeNewTournamentModal() {
    this.setState({ showNewTournament: false });
  }

  showNewTournamentModal() {
    this.setState({ showNewTournament: true });
  }

  onNearMeChange() {
    const nearMe = !this.state.nearMe;
    let position = this.state.position;

    if (nearMe) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      position = null;
    }

    this.setState({ nearMe, position });
  }

  render() {
    let newTournamentModal;
    let nearMeToggle;

    if (this.state.showNewTournament) {
      newTournamentModal = (
        <Layer onClose={this.closeNewTournamentModal} closer>
          <Box pad={{ vertical: 'small' }}>
            <NewTournamentForm onSubmit={this.closeNewTournamentModal} />
          </Box>
        </Layer>
      );
    }

    if (this.state.showNearMe) {
      nearMeToggle = (
        <CheckBox
          label="Near Me"
          value={this.nearMe}
          onChange={this.onNearMeChange}
          title="Shows Tournaments in a 20KM Radius"
          reverse
          toggle
          />
      );
    }

    return (
      <Box pad="medium" full>
        <Header justify="between" responsive >
          <Title>Tournaments</Title>
          <div>
            {nearMeToggle}
            <Button
              icon={<Add />}
              label="Create"
              href="#"
              onClick={this.showNewTournamentModal}
              />
          </div>
        </Header>
        <div style={{ marginTop: '10px' }}>
        <TournamentList position={this.state.position} onSelect={this.onSelectTournament} addHeaders />
        {newTournamentModal}
        </div>
      </Box >
    );
  }
}

Tournaments.propTypes = {
  showNotification: PropTypes.func,
};

export default connect(null, { showNotification: showNewNotification })(Tournaments);
