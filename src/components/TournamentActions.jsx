import React, { PropTypes } from 'react';

import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

const TournamentActions = ({ onSignup }) => (
  <Menu direction="row" responsive>
    <Anchor
      label="Sign up"
      onClick={onSignup}
      />
  </Menu>
);

TournamentActions.propTypes = {
  onSignup: PropTypes.func,
};

export default TournamentActions;

