import 'grommet/grommet.min.css';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Container from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Notification from 'grommet/components/Notification';

import { closeNotification } from '../actions/notification';

import Header from './Header';

const App = ({ children, notification, closeNotificationBar }) => {
  let notificationBar = null;

  if (notification) {
    notificationBar = <Notification {...notification} onClose={closeNotificationBar} closer />;
  }

  return (
    <Container centered={false}>
      <Box colorIndex="light-2">
        <Header />
        {notificationBar}
        {children}
      </Box>
    </Container>
  );
};

App.propTypes = {
  children: PropTypes.any,
  notification: PropTypes.object,
  closeNotificationBar: PropTypes.func,
};

const mapStateToProps = state => ({
  notification: state.notification,
});

export default connect(mapStateToProps, { closeNotificationBar: closeNotification })(App);
