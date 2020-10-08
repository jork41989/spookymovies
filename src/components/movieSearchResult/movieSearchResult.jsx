import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./movie_search_results.css"

const MovieSearchResults = (state) => {
  const [poster, setPoster] = useState()
  let posterbuilder = () => {
    if (state.movie.Poster === "N/A") {
      setPoster(<img src={"/ghost_shocked.svg"} alt="Poster" className="searchPoster" />)
    } else {
      setPoster(<img src={state.movie.Poster} alt="Poster" className="searchPoster" />)
    }
  }
  let movieButton = () =>{
    state.selectAMovie(state.movie)
  }
  useEffect(() => {
    posterbuilder()
  }, [state.movie])
  return (
    <div className="resultMain">
      {poster}
      <p className="searchTitle">{state.movie.Title}</p>
      <p>({state.movie.Year})</p>
      <button onClick={movieButton}>Select</button>
    </div>
  )

}



const msp = state => ({
  user: state.session.user,
  token: state.session.token,
  moviesearch: state.moviesearch
})

const mdp = dispatch => ({

})


export default connect(msp, mdp)(MovieSearchResults)