import axios from 'axios';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT
} from './actionType';

const API = "https://garden-guru.cyclic.app";

export const Login = (userDetails) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_REQUEST });
        console.log(userDetails);
        return axios.post(`${API}/users/login`, userDetails).then(
            (res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data }),
            (err) => dispatch({ type: LOGIN_FAILURE })
        );
    };
};

export const Logout = () => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post(`${API}users/logout`)
    .then((res) => {
      dispatch({ type: LOGOUT });
    })
    .catch((err) => dispatch({ type: LOGIN_FAILURE }));
};