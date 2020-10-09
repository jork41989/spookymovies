import axios from 'axios';

const movieAxios = axios.create({
  baseURL: 'http://www.omdbapi.com/'
})

export {
  movieAxios
};