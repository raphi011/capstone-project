import React, { Component } from 'react';
import NewTournamentForm from '../components/NewTournamentForm';

class NewTournamentFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date().toString(),
      size: 16,
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSizeChange = this.onSizeChange.bind(this);
  }

  onSizeChange({ option }) {
    this.setState({ size: option });
  }

  onDateChange(value) {
    this.setState({ date: value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (<NewTournamentForm
      onSubmit={this.onSubmit}
      onDateChange={this.onDateChange}
      onSizeChange={this.onSizeChange}
      date={this.state.date}
      size={this.state.size}
      />
    );
  }
}

export default NewTournamentFormContainer;
