import Api from "../../../api/Api";

const storeService = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/services", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const updateService = (id, form) => {
  return new Promise((resolve, reject) => {
    Api.put(`/services/${id}`, form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const getServices = () => (dispatch) => {
  Api.get("/services")
    .then((res) => {
      dispatch({
        type: "GET_SERVICES",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const getService = (id) => (dispatch) => {
  Api.get(`/services/${id}`)
    .then((res) => {
      dispatch({
        type: "GET_SERVICE",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export { storeService, getServices, getService, updateService };
