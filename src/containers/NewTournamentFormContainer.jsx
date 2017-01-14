import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import NewTournamentForm from '../components/NewTournamentForm';

import { createTournament } from '../actions/tournament';

class NewTournamentFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tournament: {
        date: moment().format('YYYY-MM-DD HH:mm'),
        size: 16,
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

  onClubChange(club) {
    const tournament = this.state.tournament;
    tournament.club = club;

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

    errors.dateError =
      moment(value, 'YYYY-MM-DD HH:mm', true).isValid() ?
        '' :
        'Invalid Date Format.';

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

    const tournament = this.state.tournament;
    tournament.league = tournament.league.value;

    this.props.createTournament(tournament);

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
  createTournament: PropTypes.func.isRequired,
};

export default connect(null, { createTournament })(NewTournamentFormContainer);
