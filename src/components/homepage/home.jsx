import React, { useState, useEffect } from "react";
import Login from "../login/login";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../logout/logout";
import "./homepage.css"
import UserCheck from "../userCheck/userCheck";

export default function Homepage() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  

  let loginCheck = function () {
    while (!isLoading){
      if (isAuthenticated) {
        return (
          <div>
            <h3>{user.name}</h3>
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
  }

  return (
    <div className="homediv">
      {loginCheck()}
    </div>
  )
}