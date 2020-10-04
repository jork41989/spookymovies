import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";


const AdminCheck = (state) => {
  const { isAuthenticated, isLoading } = useAuth0();
  let checker = function() {
    if(isAuthenticated && state.user.admin){
      return (
        <button>Admin Portal</button>
      )
    }
  }

  return(
    <div>
      {checker()}
    </div>
  )
}

const msp = state => ({
  user: state.session.user,
  token: state.session.token
})

const mdp = dispatch => ({
})


export default connect(msp, mdp)(AdminCheck)