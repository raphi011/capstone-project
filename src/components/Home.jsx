import React, { Component, PropTypes } from 'react';

import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

import NewTournamentForm from '../containers/NewTournamentFormContainer';

class Home extends Component {
  render() {
    return (
      <Box pad="medium" full>
        <Header>
          <Title>Home</Title>
        </Header>
        <NewTournamentForm />
      </Box>
    );
  }
}

export default Home;
