import {
  DELETE_POST_REQUEST_SUCCESS,
  GET_POST_REQUEST_SUCCESS,
  PATCH_POST_REQUEST_SUCCESS,
  POST_POST_REQUEST_SUCCESS,
  POST_REQUEST_FAILURE,
  POST_REQUEST_PENDING,
} from "./actionTypes";

const initalState = {
  isLoadin: false,
  isError: false,
  posts: [],
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case POST_REQUEST_PENDING:
      return { ...state, isLoading: true };
    case GET_POST_REQUEST_SUCCESS:
      return { ...state, isLoading: false, product: payload };
    case POST_POST_REQUEST_SUCCESS:
      return { ...state, isLoading: false };
    case POST_REQUEST_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case PATCH_POST_REQUEST_SUCCESS:
      return { ...state, isLoading: false };
    case DELETE_POST_REQUEST_SUCCESS:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
