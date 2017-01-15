import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import moment from 'moment';

import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Layer from 'grommet/components/Layer';
import Markdown from 'grommet/components/Markdown';

import TournamentSignupForm from '../containers/TournamentSignupFormContainer';
import TournamentActions from '../components/TournamentActions';
import TeamList from '../containers/TeamListContainer';
import * as propTypes from '../propTypes';
import { getTournament } from '../reducers/tournament';

class Tournament extends Component {
  static calculateRemainingDays(date) {
    // TODO: implement this
    return 15;
  }

  constructor(props) {
    super(props);

    this.state = {
      showNewTournament: false,
    };

    this.onSignup = this.onSignup.bind(this);
    this.closeSignup = this.closeSignup.bind(this);
  }

  onSignup() {
    this.setState({ showNewTournament: true });
  }

  closeSignup() {
    this.setState({ showNewTournament: false });
  }

  render() {
    const { tournament } = this.props;

    const description = tournament.description || '## No Description was provided';
    const teamsCount = tournament.teams ? tournament.teams.length : 0;
    const remainingDays = Tournament.calculateRemainingDays(new Date(tournament.date));

    let newTeamModal;

    if (this.state.showNewTournament) {
      newTeamModal = (
        <Layer onClose={this.closeSignup} closer>
          <Box pad={{ vertical: 'small' }}>
            <TournamentSignupForm />
          </Box>
        </Layer>
      );
    }

    return (
      <Box>
        <Box pad="small" direction="column" colorIndex="light-1" style={{ margin: '10px 10px 0 10px' }} >
          <Box direction="row" justify="between" >
            <span>
              <Heading>{tournament.league}-Cup {tournament.name ? `'${tournament.name}'` : ''}</Heading>
              Location: <Link to={`/clubs/${tournament.club.normalizedName}`}>{tournament.club.name}</Link><br />
              {teamsCount} / {tournament.size} teams have joined
          </span>
            <span style={{ textAlign: 'right' }}>
              <b>{moment(tournament.date).format('MMMM D')}</b><br />
              {remainingDays} days to go!
          </span>
          </Box>
          <Box direction="row" justify="end" >
            <TournamentActions onSignup={this.onSignup} addHeaders />
          </Box>
        </Box>
        <Box direction="row" justify="between" >
          <Box colorIndex="light-1" pad="medium" style={{ flex: 2, margin: '10px 10px 0 10px', boxShadow: '0 1px 4px 0 rgba(0,0,0,0.14)' }} >
            <Markdown content={description} />
          </Box>
          <Box colorIndex="light-1" style={{ flex: 1, margin: '10px 10px 0 10px', boxShadow: '0 1px 4px 0 rgba(0,0,0,0.14)' }} >
            <Heading tag="h2" align="center">Teams</Heading>
            <TeamList />
          </Box>
        </Box>
        {newTeamModal}
      </Box>
    );
  }
}

Tournament.propTypes = {
  tournament: propTypes.tournament,
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.params;

  const tournament = id ? getTournament(state, id) : null;

  return ({
    tournament,
  });
};

export default connect(mapStateToProps)(Tournament);
