import Api from "../../../api/Api";

const getUsers =
  (search = "") =>
  (dispatch) => {
    Api.get(`/users?search=${search}`)
      .then((res) => {
        dispatch({
          type: "GET_USERS",
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

export { getUsers };
