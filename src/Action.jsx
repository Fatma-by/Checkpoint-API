export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
import axios from "axios";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

console.log(initialState);

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};




const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
export const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        console.log(response);
        const user = response.data;
        console.log(user,"action");

        dispatch(fetchUsersSuccess(user));

        console.log(user);
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
        console.log(error.message);
      });
  };
};
