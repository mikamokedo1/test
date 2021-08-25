import axios from 'axios';

const BaseAPI = process.env.REACT_APP_API_URL;
const jwtAxios = axios.create({
  baseURL: BaseAPI,
  headers: {
    'Content-Type': 'application/json',
  },
});
jwtAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.data.msg === 'Token is not valid') {
      console.log('Need to logout user');
      // store.dispatch({type: LOGOUT});
    }
    return Promise.reject(err);
  },
);
export const setAuthToken = (token: string | null) => {
  if (token) {
    jwtAxios.defaults.headers.common['x-auth-token'] = token;
    localStorage.setItem('token', token);
  } else {
    delete jwtAxios.defaults.headers.common['x-auth-token'];
    localStorage.removeItem('token');
  }
};

export default jwtAxios;
