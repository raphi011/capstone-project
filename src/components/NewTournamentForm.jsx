import React, { PropTypes } from 'react';

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


const NewTournamentForm = ({ onSubmit, onDateChange, onSizeChange, date, size }) => (
  <Form>
    <Header>
      <Heading>
        New Tournament
    </Heading>
    </Header>
    <FormFields>
      <FormField label="Date">
        <DateTime
          id="id"
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
      <FormField>
        <RadioButton
          id="choice1-1"
          name="choice1-1"
          label="Men"
          checked
          />
        <RadioButton
          id="choice1-2"
          name="choice1-2"
          label="Women"
          checked={false}
          />
      </FormField>
      <FormField label="Description">
        <textarea rows="5" />
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
  date: PropTypes.string,
  size: PropTypes.number,
};

export default NewTournamentForm;
