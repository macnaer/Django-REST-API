import axios from "axios";
import { GET_USERS, DELETE_USER, ADD_USER } from "./actions";
import { returnErrors, createMessage } from "./messages";

export const getUsers = () => (dispatch) => {
  axios
    .get("/api/users/")
    .then((res) => {
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteUser = (id) => (dispatch) => {
  axios
    .delete(`/api/users/${id}`)
    .then((res) => {
      console.log("deleteUser axios result => ", res);
      dispatch({
        type: DELETE_USER,
        payload: id,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data.status)));
};

export const addUser = (user) => (dispatch) => {
  console.log("User = ", user);
  axios
    .post("/api/users/", user)
    .then((res) => {
      dispatch(createMessage({ addUser: "User created" }));
      dispatch({
        type: ADD_USER,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data.status, err.response.status))
    );
};
