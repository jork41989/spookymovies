import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {getSearchMovie} from '../../actions/moviedb_actions'
import MovieSearchResult from "../movieSearchResult/movieSearchResult";
import "./movie_form.css"


const MovieForm = (state) => {
  const [results, setResults] = useState([])
  const [selectedMovie, setSMovie] = useState({})
  const [selectedMovieDiv, setMovieDiv] = useState()
  

  let selectAMovie = function (movie){
    document.getElementById("searchBar").value = ""
    setResults([])
    setSMovie(movie)
  }
 

  let resultFinder = () => {
    let newResults = []
    if (state.moviesearch){
      if (Object.keys(state.moviesearch).length >= 1) {
        Object.keys(state.moviesearch).forEach( movie => {
          newResults.push(<MovieSearchResult key={movie} movie={state.moviesearch[movie]} selectAMovie={selectAMovie}/>)
        })
        setResults(newResults)
      } else {
        newResults = []
        setResults(newResults)
      }
    } 
    
  }

  
  let searchFn = (e) => {
    if (e.target.value.length > 1){
      console.log("searching")
      state.getSearchMovie(e.target.value)
    }
    
  };
  let movieDivBuilder = () => {
    if (Object.keys(selectedMovie).length >= 1){
      console.log(selectedMovie)
      setMovieDiv(
        <div>
          <img src={selectedMovie.Poster} alt="Poster" className="poster_HL"/>
          <h3>{selectedMovie.Title}</h3>
          <p>{selectedMovie.Year}</p>
          <div>
            <button>Slasher</button>
            <button>Monster</button>
            <button>Comedy</button>
            <button>Crime</button>
            <button>Redneck</button>
            <button>Home Invasion</button>
            <button>Virus</button>
            <button>Paranormal</button>
            <button>Psychological</button>
            <button>Gore</button>
            <button>Sci Fi</button>
            <button>Family</button>
          </div>
        </div>
      )
    }
  }

  useEffect(()=>{
    resultFinder()
  }, [state.moviesearch])

  useEffect(() => {
    movieDivBuilder()
  }, [selectedMovie])

  return(
    <div className="modalBody">
      <label htmlFor="searchBar">Search For A Movie</label>
      <input type="text" name="searchBar" id="searchBar" onChange={searchFn}/>
      <div className="resultsMain">
        {results}
      </div>
      <div>
        {selectedMovieDiv}
      </div>
    </div>
  )
}


const msp = state => ({
  user: state.session.user,
  token: state.session.token,
  moviesearch: state.moviesearch
})

const mdp = dispatch => ({
  getSearchMovie: payload => dispatch(getSearchMovie(payload))
})


export default connect(msp, mdp)(MovieForm)