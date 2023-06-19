import instance from "../../utils/axiosInstance";
import Cookies from "js-cookie";
import {
  DELETE_POST_REQUEST_SUCCESS,
  GET_POST_REQUEST_SUCCESS,
  PATCH_POST_REQUEST_SUCCESS,
  POST_POST_REQUEST_SUCCESS,
  POST_REQUEST_FAILURE,
  POST_REQUEST_PENDING,
} from "./actionTypes";

//For Getting The Data
export const getPostFn = (obj) => (dispatch) => {
  dispatch({ type: POST_REQUEST_PENDING });

  instance
    .get(`/posts/?${obj}`)
    .then((res) => {
      // console.log('res-data', res.data);
      dispatch({ type: GET_POST_REQUEST_SUCCESS, payload: res });
    })
    .catch((err) => {
      // console.log('API FAILURE', err);
      dispatch({ type: POST_REQUEST_FAILURE });
    });
};

// for top post
export const getTopPosts = () => (dispatch) => {
  dispatch({ type: POST_REQUEST_PENDING });

  instance
    .get(`/posts/?_sort=rating&_order=desc&_limit=3&_page=1`)
    .then((res) => {
      // console.log('res-data', res.data);
      dispatch({ type: GET_POST_REQUEST_SUCCESS, payload: res });
    })
    .catch((err) => {
      // console.log('API FAILURE', err);
      dispatch({ type: POST_REQUEST_FAILURE });
    });
};

//For Posting The Data
export const postPostFn = (postData) => (dispatch) => {
  dispatch({ type: POST_REQUEST_PENDING });

  return instance
    .post(`/posts/create`, postData)
    .then((res) => {
      dispatch({ type: POST_POST_REQUEST_SUCCESS, payload: postData });
    })
    .catch((err) => {
      // console.log('API FAILURE', err);
      dispatch({ type: POST_REQUEST_FAILURE });
    });
};

//For Patching The Data
export const patchPostFn = (id, postData) => (dispatch) => {
  dispatch({ type: POST_REQUEST_PENDING });

  return instance
    .patch(`/posts/${id}`, postData)
    .then((res) => {
      dispatch({ type: PATCH_POST_REQUEST_SUCCESS, payload: res });
    })
    .catch((err) => {
      // console.log('API FAILURE', err);
      dispatch({ type: POST_REQUEST_FAILURE });
    });
};

//For Deleting The Data
export const deletePostFn = (id) => (dispatch) => {
  dispatch({ type: POST_REQUEST_PENDING });

  return instance
    .delete(`/posts/${id}`)
    .then((res) => {
      // console.log('delete req', res);
      dispatch({ type: DELETE_POST_REQUEST_SUCCESS });
    })
    .catch((err) => {
      // console.log('API FAILURE', err);
      dispatch({ type: POST_REQUEST_FAILURE });
    });
};

// For getting all post of perticular user
export const getallpostUser = () => (dispatch) => {
  dispatch({ type: POST_REQUEST_PENDING });

  return instance
    .get(`/posts/myPosts`)
    .then((res) => {
      dispatch({ type: GET_POST_REQUEST_SUCCESS, payload: res });
    })
    .catch((err) => {
      console.log("API FAILURE", err);
      dispatch({ type: POST_REQUEST_FAILURE });
    });
};
