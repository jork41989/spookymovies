import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {getSearchMovie} from '../../actions/moviedb_actions'
import MovieSearchResult from "../movieSearchResult/movieSearchResult";
import "./movie_form.css"


const MovieForm = (state) => {
  const [results, setResults] = useState([])
  const [selectedMovie, setSelectedMovie] = useState()
  

  let selectAMovie = function (movieID){
    setSelectedMovie(movieID)
    document.getElementById("searchBar").value = ""
  }
 

  let resultFinder = () => {
    let newResults = []
    if (state.moviesearch){
      if (Object.keys(state.moviesearch).length >= 1) {
        Object.keys(state.moviesearch).forEach( movie => {
          newResults.push(<MovieSearchResult key={movie} movie={state.moviesearch[movie]} selectAMovie={selectAMovie}/>)
        })
        setResults(newResults)
        console.log(state.moviesearch)
      } else {
        console.log(state.moviesearch)
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
      <div>
        
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