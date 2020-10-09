
import { mainAxios } from './baseurl';


// let headerset = () => {
//   if (window.localStorage.jwtToken) {
//     return {headers: {common: 
//                         {'Authorization': localStorage.jwtToken}
//                       }
//             }
//   }
// }

export const addMovie = (movieData) => {
  debugger
  // let header = headerset()

  return mainAxios.post('/api/movies/newMovie/', movieData);
  
  
}