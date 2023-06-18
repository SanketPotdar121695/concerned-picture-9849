import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: process.env.REACT_APP_baseURL
});

// Add a request interceptor to check for token before sending a request
instance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor to set token as cookie after receiving a response
instance.interceptors.response.use(
  (response) => {
    const token = response.data.token || null;
    const rToken = response.data.rToken || null;
    const userDetails = response.data.userDetails || {};

    if (token && rToken && userDetails) {
      Cookies.set('token', token, { expires: 7 });
      Cookies.set('rToken', rToken, { expires: 7 });
      Cookies.set('userDetails', JSON.stringify(userDetails), { expires: 7 });
    }
    return response;
  },
  (error) => Promise.reject(error)
);

export default instance;
