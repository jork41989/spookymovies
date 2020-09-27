import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

export default function UserCheck() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  let setUser = function(){
    if (isAuthenticated){
      let userInfo = {username: user.usernam, email: user.email}
      axios.patch(`https://spookyback-opei2xav6q-ue.a.run.app/api/users/login/`, userInfo)
        .then(user => console.log(user))
    }
  }

  return (
    <div>
      {setUser()}
    </div>
    
  )

}