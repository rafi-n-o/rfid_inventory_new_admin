const stateDurations = {
  durations: [],
};

const stateDuration = {
  duration: {},
};

const durations = (state = stateDurations, action) => {
  if (action.type === "GET_DURATIONS") {
    return {
      ...state,
      durations: action.payload,
    };
  }

  return state;
};

const duration = (state = stateDuration, action) => {
  if (action.type === "GET_DURATION") {
    return {
      ...state,
      duration: action.payload,
    };
  }

  return state;
};

export { durations, duration };
