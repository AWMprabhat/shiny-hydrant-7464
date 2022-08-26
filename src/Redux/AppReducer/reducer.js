import * as types from "./actionType";

const init = {
  company: [],
  isAppLoading: false,
  isAppError: false,
};

const reducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_COMPANY_RECORD_REQUEST: {
      return {
        ...state,
        isAppLoading: true,
        isAppError: false,
      };
    }
    case types.GET_COMPANY_RECORD_SUCCESS: {
      return {
        ...state,
        company: payload,
        isAppLoading: false,
        isAppError: false,
      };
    }
    case types.GET_COMPANY_RECORD_FAILURE: {
      return {
        ...state,
        isAppLoading: false,
        isAppError: true,
      };
    }
    default: {
      return state;
    }
  }
};
export { reducer };
