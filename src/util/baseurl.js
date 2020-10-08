import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

const mainAxios = axios.create({
  baseURL: 'https://spookyback-opei2xav6q-ue.a.run.app'
});

const movieAxios = axios.create({
  baseURL: 'http://www.omdbapi.com/'
})


export default setAuthToken;
export {
  mainAxios,
  movieAxios
};