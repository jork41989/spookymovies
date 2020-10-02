import React, { useState, useEffect } from "react";
import { login, logout } from '../../actions/session_actions';
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from "react-redux";


const UserCheck = (state) => {
  const { user, isAuthenticated, isLoading} = useAuth0();
  let setUser = function(){
    console.log(state)
    if (isAuthenticated){
      let userInfo = { email: user.email, username: user.nickname}
      state.login(userInfo)
    } else {
      state.logout()
      console.log(state)
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
  login: payload => dispatch(login(payload)),
  logout: payload => dispatch(logout())
})

export default connect(msp, mdp)(UserCheck)