import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './actionType';

let token = localStorage.getItem('token') || null;
const initialState = {
  isAuth: token ? true : false,
  isError: false,
  isLoading: false
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case LOGIN_SUCCESS: {
      return { ...state, token: payload, isLoading: false, isAuth: true };
    }
    case LOGIN_FAILURE: {
      return { ...state, isError: true, isLoading: false, isAuth: false };
    }

    default:
      return state;
  }
};
