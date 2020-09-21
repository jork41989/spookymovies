import React, { useState } from "react";
import Login from "../login/login";
import { useAuth0 } from "@auth0/auth0-react";
import './header.css'
import LogoutButton from "../logout/logout";


export default function HeaderBar(){
  const { user, isAuthenticated, isLoading } = useAuth0();
  let loginCheck = function(){

    console.log(isAuthenticated)
    if (isAuthenticated){
      return (
        <div>
          <h3>{user.name}</h3>
          <LogoutButton/>
        </div>
      )
    } else {
      return (
        <div>
          <Login />
        </div>
      )
    }
  }

  return (
    <div className="headerBar">
      {loginCheck()}
    </div>
  )
}