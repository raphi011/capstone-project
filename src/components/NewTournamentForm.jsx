import React, { PropTypes } from 'react';

import TextInput from 'grommet/components/TextInput';
import DateTime from 'grommet/components/DateTime';
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Select from 'grommet/components/Select';
import RadioButton from 'grommet/components/RadioButton';

import * as propTypes from '../propTypes';

const NewTournamentForm = (
  { onSubmit, onDateChange, onSizeChange, onLeagueChange, onTypeChange, onNameChange, onDescriptionChange,
    onClubChange,
    league, type, date, dateError, size, name, club, clubs }) => (
    <Form>
      <Header>
        <Heading>
          New Tournament
    </Heading>
      </Header>
      <FormFields>
        <FormField label="Name">
          <TextInput
            value={name}
            placeHolder="e.g. 'BeachBattle' (optional)"
            onDOMChange={e => onNameChange(e.target.value)}
            />
        </FormField>
        <FormField label="Club">
          <Select
            options={clubs}
            value={club}
            onChange={onClubChange}
            />
        </FormField>
        <FormField label="League">
          <Select
            options={[{ value: 'A', label: 'A-Cup' }, { value: 'B', label: 'B-Cup' }, { value: 'C', label: 'C-Cup' }]}
            value={league}
            onChange={onLeagueChange}
            />
        </FormField>
        <FormField label="Date" error={dateError}>
          <DateTime
            id="id"
            format="YYYY-MM-DD HH:mm:ss"
            name="name"
            onChange={onDateChange}
            value={date}
            />
        </FormField>
        <FormField label="Players">
          <Select
            options={[8, 16, 32, 64]}
            value={size}
            onChange={onSizeChange}
            />
        </FormField>
        <FormField label="Type">
          <RadioButton
            label="Men"
            checked={type === 'M'}
            onChange={() => onTypeChange('M')}
            />
          <RadioButton
            label="Women"
            checked={type === 'F'}
            onChange={() => onTypeChange('F')}
            />
        </FormField>
        <FormField label="Description" >
          <textarea rows="5" onChange={e => onDescriptionChange(e.target.value)} placeholder="Additional Description for the tournament" />
        </FormField>
      </FormFields>
      <Footer pad={{ vertical: 'medium' }}>
        <Button
          label="Submit"
          type="submit"
          onClick={onSubmit}
          primary
          />
      </Footer>
    </Form>
  );

NewTournamentForm.propTypes = {
  onSubmit: PropTypes.func,
  onDateChange: PropTypes.func,
  onSizeChange: PropTypes.func,
  onLeagueChange: PropTypes.func,
  onTypeChange: PropTypes.func,
  onNameChange: PropTypes.func,
  onClubChange: PropTypes.func,
  onDescriptionChange: PropTypes.func,
  type: PropTypes.string,
  league: PropTypes.object,
  club: propTypes.club,
  clubs: PropTypes.arrayOf(propTypes.club),
  name: PropTypes.string,
  date: PropTypes.string,
  dateError: PropTypes.string,
  size: PropTypes.number,
};

export default NewTournamentForm;
