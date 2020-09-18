import React, { useState } from "react";
import Login from "../login/login";
import './header.css'


export default function HeaderBar(){

  return (
    <div className="headerBar">
      <Login />
    </div>
  )
}