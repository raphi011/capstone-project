const notification = (state = null, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return {
        status: action.status,
        message: action.message,
      };
    case 'CLOSE_NOTIFICATION':
      return null;
    default:
      return state;
  }
};

export default notification;
