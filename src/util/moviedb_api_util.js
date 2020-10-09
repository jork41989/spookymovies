import { movieAxios } from './moviebaseurl';
const MovieKey = process.env.MOVIEKEY || require('../config/keys').movieKey;


export const movieAddSearch = (searchTerm) => {
  return movieAxios.post(`?s=${searchTerm}&apikey=${MovieKey}`);
}