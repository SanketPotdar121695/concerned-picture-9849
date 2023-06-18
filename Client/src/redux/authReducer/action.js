import instance from '../../utils/axiosInstance';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT
} from './actionType';

const API = process.env.REACT_APP_baseURL;

export const Login = (userDetails) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    console.log(userDetails);
    return instance.post(`/users/login`, userDetails).then(
      (res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data }),
      (err) =>
        dispatch({ type: LOGIN_FAILURE, payload: err.response.data || err })
    );
  };
};

export const Logout = () => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return instance
    .post(`/users/logout`)
    .then((res) => {
      dispatch({ type: LOGOUT });
    })
    .catch((err) => dispatch({ type: LOGIN_FAILURE }));
};
