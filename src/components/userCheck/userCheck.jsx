import React, { useEffect } from "react";
import { login, logout } from '../../actions/session_actions';
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from "react-redux";




const UserCheck = (state) => {
  const { user, isAuthenticated, isLoading} = useAuth0();
  useEffect(()=>{
    if (isAuthenticated && !isLoading && Object.keys(state.user).length === 0 ) {
      let userInfo = { email: user.email, username: user.nickname }
      state.login(userInfo)
    }
  })
  let setUser = function(){
  }
  return (
    <div>
      {setUser()}
    </div>
    
  )
  

}

const msp = state => ({
  user: state.session.user,
  token: state.session.token
})

const mdp = dispatch => ({
  login: payload => dispatch(login(payload)),
  logout: payload => dispatch(logout())
})

export default connect(msp, mdp)(UserCheck)