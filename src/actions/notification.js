
export const showNewNotification = (status, message) => ({
  type: 'SHOW_NOTIFICATION',
  status,
  message,
});

export const closeNotification = () => ({ type: 'CLOSE_NOTIFICATION' });
