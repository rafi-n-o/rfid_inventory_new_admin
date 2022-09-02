import { combineReducers } from "redux";
import { services, service } from "./service";
import { durations, duration } from "./duration";
import { devices, device } from "./device";
import { users } from "./user";
import { orders } from "./order";

const reducer = combineReducers({
  services,
  service,
  durations,
  duration,
  devices,
  device,
  users,
  orders,
});

export default reducer;
