import React, { PropTypes } from 'react';

import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import Select from 'grommet/components/Select';

const TournamentSignupForm = ({
  onSearchPlayer1, onSearchPlayer2, onSubmit, onSetPlayer1, onSetPlayer2,
  players, player1, player2 }) => {
  return (
    <Form>
      <Header>
        <Heading>Register</Heading>
      </Header>
      <FormFields>
        <FormField label="Player 1">
          <Select
            id="player1"
            value={player1}
            onChange={({ option }) => onSetPlayer1(option)}
            onSearch={onSearchPlayer1}
            options={['Player 1', 'Player 2']}
            />
        </FormField>
        <FormField label="Player 2">
          <Select
            id="player2"
            value={player2}
            onChange={({ option }) => onSetPlayer2(option)}
            onSearch={onSearchPlayer2}
            options={['Player 1', 'Player 2']}
            />
        </FormField>
      </FormFields>
      <Footer pad={{ vertical: 'medium' }}>
        <Button onClick={onSubmit} type="submit" label="Register" primary />
      </Footer>
    </Form >
  );
};

TournamentSignupForm.propTypes = {
  onSetPlayer1: PropTypes.func,
  onSetPlayer2: PropTypes.func,
  onSearchPlayer1: PropTypes.func,
  onSearchPlayer2: PropTypes.func,
  onSubmit: PropTypes.func,
  players: PropTypes.func,
};

export default TournamentSignupForm;

