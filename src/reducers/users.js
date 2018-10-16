const users = (state={username: '', email: '', password: ''}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export default users;