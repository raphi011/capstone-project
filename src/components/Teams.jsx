import React, { Component, PropTypes } from 'react';

import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

class Teams extends Component {
  render() {
    return (
      <Box pad="medium" full>
        <Header >
          <Title>Teams</Title>
        </Header>
      </Box>
    );
  }
}

export default Teams;
