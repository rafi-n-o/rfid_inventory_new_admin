const stateDevices = {
  devices: [],
};

const stateDevice = {
  device: {},
};

const devices = (state = stateDevices, action) => {
  if (action.type === "GET_DEVICES") {
    return {
      ...state,
      devices: action.payload,
    };
  }

  return state;
};

const device = (state = stateDevice, action) => {
  if (action.type === "GET_DEVICE") {
    return {
      ...state,
      device: action.payload,
    };
  }

  return state;
};

export { devices, device };
