import 'grommet/grommet.min.css';

import React, { PropTypes } from 'react';
import Container from 'grommet/components/App';
import Box from 'grommet/components/Box';

import Header from './Header';

const App = ({ children }) => (
  <Container>
    <Box>
      <Header />
      {children}
    </Box>
  </Container>
);

App.propTypes = {
  children: PropTypes.any,
};

export default App;
