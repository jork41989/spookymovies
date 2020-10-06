import React from "react";
import { connect } from "react-redux";
import "./movie_form.css"


const MovieForm = (state) => {


  return(
    <div className="modalBody">
      <input type="text" name="searchBar" id="searchBar"/>
    </div>
  )
}


const msp = state => ({
  user: state.session.user,
  token: state.session.token
})

const mdp = dispatch => ({
})


export default connect(msp, mdp)(MovieForm)