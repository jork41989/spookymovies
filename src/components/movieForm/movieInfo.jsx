import React, { useEffect, useState } from "react";


export default function MovieInfo ({movie}) {
  const [poster, setPoster] = useState()
  let posterbuilder = () =>{
    if(movie.Poster === "N/A"){
      setPoster(<img src={"/ghost_shocked.svg"} alt="Poster" className="poster_HL" />)
    } else{
      setPoster(<img src={movie.Poster} alt="Poster" className="poster_HL" />)
    }
  }
  let builder = () => {
    if(Object.keys(movie).length > 1){
      return(
      <div className="selected_movie_div">
        {poster}
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <p>{movie.movieGenre}</p>
      </div>
      )
    } else {
      return(
        <div className="selected_movie_div">
          Find a movie
        </div>
      )
    }
  }

  useEffect(()=>{
    posterbuilder()
  }, [movie])

  return (
    <div>
      {builder()}
    </div>
  )

}