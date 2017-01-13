import React, { Component, PropTypes } from 'react';

import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

class Home extends Component {
  render() {
    return (
      <Box pad="medium" full>
        <Header>
          <Title>Home</Title>
        </Header>
      </Box>
    );
  }
}

export default Home;
