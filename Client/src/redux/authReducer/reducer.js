import Cookies from 'js-cookie';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT
} from './actionType';

let token = Cookies.get('token');
let userDetails = JSON.parse(Cookies.get('userDetails')) || {};

const initialState = {
  isAuth: token ? true : false,
  isError: false,
  isLoading: false,
  userDetails: userDetails
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: payload
      };
    }
    case LOGIN_FAILURE: {
      return { ...state, isError: payload, isLoading: false, isAuth: false };
    }

    case LOGOUT: {
      localStorage.removeItem('token');
      return state;
    }

    default:
      return state;
  }
};
