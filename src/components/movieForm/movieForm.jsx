import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {getSearchMovie} from '../../actions/moviedb_actions'
import MovieInfo from './movieInfo'
import MovieSearchResult from "../movieSearchResult/movieSearchResult";
import "./movie_form.css"
import { addMovie } from "../../actions/movie_actions";


const MovieForm = (state) => {
  const [results, setResults] = useState([])
  const [selectedMovie, setSMovie] = useState({})
  const [selectedMovieDiv, setMovieDiv] = useState()
  const [movieGenre, setGenre] = useState("Choose A Genre")
  

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

  let genrePicker = (e) =>{
    setGenre(e.target.value)
  }

  let movieAdd = () => {
    let payload = {}
    if(selectedMovie && movieGenre){
      payload = {...selectedMovie, Genre: movieGenre}
      state.addMovie(payload)
    }
  }
  
  useEffect(()=>{
    resultFinder()
  }, [state.moviesearch])



  return(
    <div className="modalBody">
      <label htmlFor="searchBar">Search For A Movie</label>
      <input type="text" name="searchBar" id="searchBar" onChange={searchFn}/>
      <div className="resultsMain">
        {results}
      </div>
      <div className="selected_movie_div">
        {selectedMovieDiv}
        <MovieInfo movie={{...selectedMovie, movieGenre}} />
        <div className="genre_buttons">
          <button onClick={genrePicker} value="slasher">Slasher</button>
          <button onClick={genrePicker} value="monster">Monster</button>
          <button onClick={genrePicker} value="comedy">Comedy</button>
          <button onClick={genrePicker} value="crime">Crime</button>
          <button onClick={genrePicker} value="redneck">Redneck</button>
          <button onClick={genrePicker} value="home_invasion">Home Invasion</button>
          <button onClick={genrePicker} value="virus">Virus</button>
          <button onClick={genrePicker} value="paranormal">Paranormal</button>
          <button onClick={genrePicker} value="psychological">Psychological</button>
          <button onClick={genrePicker} value="gore">Gore</button>
          <button onClick={genrePicker} value="sci_fi">Sci Fi</button>
          <button onClick={genrePicker} value="family">Family</button>
        </div>
        <button onClick={movieAdd}>Add Movie</button>
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
  getSearchMovie: payload => dispatch(getSearchMovie(payload)),
  addMovie: payload => dispatch(addMovie(payload))
})


export default connect(msp, mdp)(MovieForm)