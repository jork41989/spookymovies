import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};


export const login = (userData) => {
  return axios.post('https://spookyback-opei2xav6q-ue.a.run.app/api/users/login/', userData);
}