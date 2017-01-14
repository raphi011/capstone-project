import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: null,
    };
  }

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
