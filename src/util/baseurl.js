import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    mainAxios.defaults.headers.common['Authorization'] = token;
  } else {
    delete mainAxios.defaults.headers.common['Authorization'];
  }
};

const mainAxios = axios.create({
  
  // baseURL: 'https://spookyback-opei2xav6q-ue.a.run.app',

    baseURL: 'http://localhost:5000/'
});




export default setAuthToken;
export {
  mainAxios
};