import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import {FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, FETCH_USERS_REQUEST} from './Action'

const initialState = {
  loading: true,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
