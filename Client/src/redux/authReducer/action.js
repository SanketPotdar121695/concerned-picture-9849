import axios from 'axios';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './actionType';

const API = process.env.REACT_APP_baseURL;

export const Login = (userDetails) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    console.log(userDetails);
    return axios.post(`${API}users/login`, userDetails).then(
      (res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data }),
      (err) => dispatch({ type: LOGIN_FAILURE })
    );
  };
};
