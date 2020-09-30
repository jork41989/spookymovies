import React, { useState, useEffect } from "react";
import { login } from '../../actions/session_actions';
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from "react-redux";


const UserCheck = (state) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  let setUser = function(){
    if (isAuthenticated){
      let userInfo = { email: user.email, username: user.nickname}
      state.login(userInfo)
    }
  }

  return (
    <div>
      {setUser()}
    </div>
    
  )

}

const msp = state => ({
  user: state.user,
  token: state.token
})

const mdp = dispatch => ({
  login: payload => dispatch(login(payload))
})

export default connect(msp, mdp)(UserCheck)