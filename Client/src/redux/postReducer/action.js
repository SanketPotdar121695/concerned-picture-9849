import axios from "axios";
import {
  DELETE_POST_REQUEST_SUCCESS,
  GET_POST_REQUEST_SUCCESS,
  PATCH_POST_REQUEST_SUCCESS,
  POST_POST_REQUEST_SUCCESS,
  POST_REQUEST_FAILURE,
  POST_REQUEST_PENDING,
} from "./actionType";

const API = ``;

//For Getting The Data
export const getPostFn = (obj) => (dispatch) => {
  dispatch({ type: POST_REQUEST_PENDING });

  axios
    .get(`${API}`, obj)
    .then((res) => {
      // console.log('res-data',res.data)
      dispatch({ type: GET_POST_REQUEST_SUCCESS, payload: res });
    })
    .catch((err) => {
      console.log("API FAILURE", err);
      dispatch({ type: POST_REQUEST_FAILURE });
    });
};

//For Posting The Data
export const postPostFn = (postData) => (dispatch) => {
  dispatch({ type: POST_REQUEST_PENDING });
  return axios
    .post(API, postData)
    .then((res) => {
      dispatch({ type: POST_POST_REQUEST_SUCCESS });
    })
    .catch((err) => {
      console.log("API FAILURE", err);
      dispatch({ type: POST_REQUEST_FAILURE });
    });
};

//For Patching The Data
export const patchPostFn = (id, postData) => (dispatch) => {
  dispatch({ type: POST_REQUEST_PENDING });
  return axios
    .patch(`${API}/${id}`, postData)
    .then((res) => {
      dispatch({ type: PATCH_POST_REQUEST_SUCCESS, payload: res });
    })
    .catch((err) => {
      console.log("API FAILURE", err);
      dispatch({ type: POST_REQUEST_FAILURE });
    });
};

//For Deleting The Data
export const deletePostFn = (id) => (dispatch) => {
  dispatch({ type: POST_REQUEST_PENDING });
  return axios
    .delete(`${API}/${id}`)
    .then((res) => {
      console.log("delete req", res);
      dispatch({ type: DELETE_POST_REQUEST_SUCCESS });
    })
    .catch((err) => {
      console.log("API FAILURE", err);
      dispatch({ type: POST_REQUEST_FAILURE });
    });
};
