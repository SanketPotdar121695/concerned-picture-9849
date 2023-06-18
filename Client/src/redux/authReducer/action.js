import instance from '../../utils/axiosInstance';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT
} from './actionType';

export const Login = (userDetails) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    // console.log(userDetails);
    return instance.post(`/users/login`, userDetails).then(
      (res) => dispatch({ type: LOGIN_SUCCESS, payload: res }),
      (err) => dispatch({ type: LOGIN_FAILURE, payload: err.response })
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
    .catch((err) => dispatch({ type: LOGIN_FAILURE, payload: err }));
};
