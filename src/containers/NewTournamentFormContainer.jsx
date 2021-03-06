import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import NewTournamentForm from '../components/NewTournamentForm';
import * as propTypes from '../propTypes';
import { getAllClubs } from '../reducers/club';

import { showNewNotification } from '../actions/notification';
import { createTournament } from '../actions/tournament';

class NewTournamentFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tournament: {
        date: moment().add(1, 'days').format('YYYY-MM-DD HH:mm'),
        name: '',
        size: '16',
        type: 'M',
        league: { value: 'A', label: 'A-Cup' },
        description: '',
      },
      errors: {
        dateError: '',
        clubError: '',
      },
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSizeChange = this.onSizeChange.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onLeagueChange = this.onLeagueChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onClubChange = this.onClubChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
  }

  onClubChange({ option }) {
    const tournament = this.state.tournament;
    tournament.club = option;

    this.setState({ tournament });
  }

  onDescriptionChange(description) {
    const tournament = this.state.tournament;
    tournament.description = description;

    this.setState({ tournament });
  }

  onNameChange(name) {
    const tournament = this.state.tournament;
    tournament.name = name;

    this.setState({ tournament });
  }

  onSizeChange({ option }) {
    const tournament = this.state.tournament;
    tournament.size = option;

    this.setState({ tournament });
  }

  onDateChange(value) {
    const tournament = this.state.tournament;
    const errors = this.state.errors;

    tournament.date = value;


    if (!moment(value, 'YYYY-MM-DD HH:mm', true).isValid()) {
      errors.dateError = 'Invalid Date Format.';
    } else if (moment(value).isBefore(moment())) {
      errors.dateError = 'Can\'t create tournament in the past.';
    } else {
      errors.dateError = '';
    }

    this.setState({ tournament, errors });
  }

  onLeagueChange({ option }) {
    const tournament = this.state.tournament;
    tournament.league = option;

    this.setState({ tournament });
  }

  onTypeChange(value) {
    const tournament = this.state.tournament;
    tournament.type = value;

    this.setState({ tournament });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log('CALLING ONSUBMIT');

    const tournament = { ...this.state.tournament };
    tournament.league = tournament.league.value;
    tournament.date = moment(tournament.date).toISOString();
    tournament.teams = [];

    this.props.createTournament(tournament);
    this.props.showNotification('ok', 'Successfully created new tournament');

    if (this.props.onSubmit) this.props.onSubmit(this.state.tournament);
  }

  canSubmit() {
    const { dateError } = this.state.errors;
    const { club } = this.state.tournament;

    return !dateError && club;
  }

  render() {
    const { club, type, league, date, size, name } = this.state.tournament;
    const { dateError, clubError } = this.state.errors;
    const { clubs } = this.props;

    const onSubmit = this.canSubmit() ? this.onSubmit : null;

    return (<NewTournamentForm
      onSubmit={onSubmit}
      onNameChange={this.onNameChange}
      onDateChange={this.onDateChange}
      onSizeChange={this.onSizeChange}
      onLeagueChange={this.onLeagueChange}
      onTypeChange={this.onTypeChange}
      onClubChange={this.onClubChange}
      onDescriptionChange={this.onDescriptionChange}
      type={type}
      club={club}
      clubs={clubs}
      name={name}
      league={league}
      date={date}
      dateError={dateError}
      clubError={clubError}
      size={size}
      />
    );
  }
}

NewTournamentFormContainer.propTypes = {
  onSubmit: PropTypes.func,
  showNotification: PropTypes.func,
  clubs: PropTypes.arrayOf(propTypes.club),
  createTournament: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  clubs: getAllClubs(state).map(c => ({ ...c, value: c.normalizedName, label: c.name })),
  showNotification: showNewNotification,
});

export default connect(mapStateToProps, { createTournament })(NewTournamentFormContainer);
