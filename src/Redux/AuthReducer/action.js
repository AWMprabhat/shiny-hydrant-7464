import axios from "axios";
import * as types from "./actionType";

const register = (payload) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  return axios
    .post("", payload)
    .then((r) => {
        console.log(r)
      dispatch({ type: types.REGISTER_SUCCESS, payload: r.data });
    })
    .catch((e) => dispatch({ type: types.REGISTER_FAILURE, payload: e }));
};

const login = (params) => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST });
    return axios
      .post("http://localhost:8080/auth/login", params)
      .then((r) => {
        dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token });
      })
      .catch((e) => {
        dispatch({ type: types.LOGIN_FAILURE, payload: e });
      });
  };

export { register,login };
