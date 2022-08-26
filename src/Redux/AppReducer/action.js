import * as types from "./actionType";
import axios from "axios";

const getCompanyRecords = (params) => (dispatch) => {
  dispatch({ type: types.GET_COMPANY_RECORD_REQUEST });
  return axios
    .get("http://localhost:8080/Company", params)
    .then((res) => {
      dispatch({
        type: types.GET_COMPANY_RECORD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: types.GET_COMPANY_RECORD_FAILURE });
    });
};
export { getCompanyRecords };
