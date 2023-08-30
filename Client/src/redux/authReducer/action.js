import instance from '../../utils/axiosInstance';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT
} from './actionType';
import { url } from '../../url';


export const Login = (userDetails) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    // console.log(userDetails);
    return instance.post(`${url}/users/login`, userDetails).then(
      (res) => dispatch({ type: LOGIN_SUCCESS, payload: res }),
      (err) => dispatch({ type: LOGIN_FAILURE, payload: err.response })
    );
  };
};

export const Logout = () => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return instance
    .get(`${url}/users/logout`)
    .then((res) => {
      console.log(res);
      dispatch({ type: LOGOUT, payload: res });
    })
    .catch((err) => dispatch({ type: LOGIN_FAILURE, payload: err.response }));
};
