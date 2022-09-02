import { Provider } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainApp from "./layouts/MainApp";
import Device from "./pages/device";
import DeviceCreate from "./pages/device/create";
import DeviceUpdate from "./pages/device/update";
import Order from "./pages/order";
import Service from "./pages/service";
import ServiceCreate from "./pages/service/create";
import ServiceUpdate from "./pages/service/update";
import User from "./pages/user";
import store from "./redux/store";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <HashRouter>
          <Routes>
            <Route path="*" element={<MainApp />}>
              <Route index element={<Order />} />
            </Route>

            <Route path="services" element={<MainApp />}>
              <Route index element={<Service />} />
              <Route path="create" element={<ServiceCreate />} />
              <Route path=":id" element={<ServiceUpdate />} />
            </Route>

            <Route path="devices" element={<MainApp />}>
              <Route index element={<Device />} />
              <Route path="create" element={<DeviceCreate />} />
              <Route path=":id" element={<DeviceUpdate />} />
            </Route>

            <Route path="users" element={<MainApp />}>
              <Route index element={<User />} />
            </Route>

            <Route path="orders" element={<MainApp />}>
              <Route index element={<Order />} />
            </Route>
          </Routes>
        </HashRouter>
      </Provider>
    </>
  );
};

export default App;
