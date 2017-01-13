import React, { Component, PropTypes } from 'react';

import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Button from 'grommet/components/Button';
import Add from 'grommet/components/icons/base/AddCircle';

import TournamentList from '../containers/TournamentListContainer';

class Tournaments extends Component {
  render() {
    return (
      <Box pad="medium" full>
        <Header justify="between">
          <Title>Tournaments</Title>
          <Button
            icon={<Add />}
            label="New Tournament"
            href="#"
            />
        </Header>
        <TournamentList />
      </Box>
    );
  }
}

export default Tournaments;
