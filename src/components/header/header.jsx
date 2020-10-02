import React, { useState } from "react";
import UserCheck from "../userCheck/userCheck";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../logout/logout";
import Login from "../login/login";
import './header.css'



export default function HeaderBar(){
  const { user, isAuthenticated, isLoading } = useAuth0();
  let loginCheck = function () {
    while (!isLoading) {
      if (isAuthenticated) {
        return (
          <div className={"headerAuth"}>
            <h3>{user.name}</h3>
            <UserCheck />
            <LogoutButton />
          </div>
        )
      } else {
        return (
          <div className={"headerAuth"}>
            <UserCheck />
            <Login />
          </div>
        )
      }
    }
  }

  return (
    <div className="headerBar">
      {loginCheck()}
    </div>
  )
}