import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./movie_search_results.css"

const MovieSearchResults = (state) => {
  let movieinfo = () =>{
    console.log(state)
  }
  return (
    <div className="resultMain">
      <img src={state.movie.Poster} alt="poster" className="searchPoster"/>
      {state.movie.Title}
      ({state.movie.Year})
      {movieinfo()}
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