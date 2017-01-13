import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

class User extends Component {
  render() {
    const { params } = this.props;

    return (
      <Box pad="medium" full>
        <Header >
          <Title>User {params.name}</Title>
        </Header>
      </Box>
    );
  }
}

export default User;
