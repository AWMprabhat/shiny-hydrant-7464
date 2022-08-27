import * as types from "./actionType";
import axios from "axios";

const getCompanyRecords = (params) => (dispatch) => {
	// console.log("params: rovin ", params);
	dispatch({ type: types.GET_COMPANY_RECORD_REQUEST });
	return axios
		.get(
			"https://json-server-hospital-manish.herokuapp.com/company",
			params
		)
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
