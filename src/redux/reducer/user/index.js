const stateUsers = {
  users: [],
};

const users = (state = stateUsers, action) => {
  if (action.type === "GET_USERS") {
    return {
      ...state,
      users: action.payload,
    };
  }

  return state;
};

export { users };
