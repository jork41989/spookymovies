import React from "react";
import UserCheck from "../userCheck/userCheck";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../logout/logout";
import Login from "../login/login";
import AdminCheck from '../adminCheck/adminCheck'
import './header.css' 
import { connect } from "react-redux";


const HeaderBar = (state) => {
  const {  isAuthenticated, isLoading } = useAuth0();
    
  let loginCheck = function () {
    while (!isLoading) {
      if (isAuthenticated) {
        console.log(state)
        return (
          <div className={"headerAuth"}>
            <h3>{state.user.username}</h3>
            <LogoutButton />
            <AdminCheck />
          </div>
        )
      } else {
        return (
          <div className={"headerAuth"}>
            <Login />
          </div>
        )
      }
    }
  }

  return (
    <div className="headerBar">
      <UserCheck/>
      {loginCheck()}
    </div>
  )
}

const msp = state => ({
  user: state.session.user,
  token: state.session.token
})

const mdp = dispatch => ({
})


export default connect(msp, mdp)(HeaderBar)