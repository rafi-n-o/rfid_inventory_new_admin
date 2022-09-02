import Api from "../../../api/Api";

const storeDevice = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/devices", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const updateDevice = (id, form) => {
  return new Promise((resolve, reject) => {
    Api.put(`/devices/${id}`, form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const getDevices = () => (dispatch) => {
  Api.get("/devices")
    .then((res) => {
      dispatch({
        type: "GET_DEVICES",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const getDevice = (id) => (dispatch) => {
  Api.get(`/devices/${id}`)
    .then((res) => {
      dispatch({
        type: "GET_DEVICE",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export { storeDevice, getDevices, getDevice, updateDevice };
