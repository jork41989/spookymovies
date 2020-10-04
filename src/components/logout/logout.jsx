import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';

const LogoutButton = (state) => {
  const { logout } = useAuth0();
  let logoutfn = () =>{
      state.logout()
      logout({ returnTo: window.location.origin })
  }

  return (
    <button onClick={logoutfn}>
      Log Out
    </button>
  );
};


const msp = state => ({
  user: state.session.user,
  token: state.session.token
})

const mdp = dispatch => ({
  logout: payload => dispatch(logout())
})

export default connect(msp, mdp)(LogoutButton)
