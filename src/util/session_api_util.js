import axios from 'axios';
import { mainAxios } from './baseurl';




export const login = (userData) => {
  return mainAxios.post('/api/users/login/', userData);
}