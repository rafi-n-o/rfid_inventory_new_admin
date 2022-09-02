import Api from "../../../api/Api";

const storeDuration = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/durations", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const updateDuration = (id, form) => {
  return new Promise((resolve, reject) => {
    Api.put(`/durations/${id}`, form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const getDurations = () => (dispatch) => {
  Api.get("/durations")
    .then((res) => {
      dispatch({
        type: "GET_DURATIONS",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const getDuration = (id) => (dispatch) => {
  Api.get(`/durations/${id}`)
    .then((res) => {
      dispatch({
        type: "GET_DURATION",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export { storeDuration, getDurations, getDuration, updateDuration };
