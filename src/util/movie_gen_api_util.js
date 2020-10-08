
import { mainAxios } from './baseurl';


let headerset = () => {
  if (window.localStorage.jwtToken) {
    return {headers: {common: 
                        {'Authorization': window.localStorage.jwtToken}
                      }
            }
  }
}

export const addMovie = (movieData) => {
  debugger
  let header = headerset()
  console.log(header)
  return mainAxios.post('/api/movies/newMovie/', movieData, header);
  
  
}