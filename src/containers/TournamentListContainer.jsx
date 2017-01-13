import React, { Component } from 'react';
import TournamentList from '../components/TournamentList';

class TournamentListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (<TournamentList />
    );
  }
}

export default TournamentListContainer;
