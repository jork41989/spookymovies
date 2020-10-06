import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MovieForm from '../movieForm/movieForm'
import "./admin_check.css"


const AdminCheck = (state) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const [open, setOpen] = useState(false);

  const rand = () => {
    return Math.round(Math.random() * 20) - 10;
  }

  const getModalStyle = () => {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let checker = function() {
    if(isAuthenticated && state.user.admin){
      return (
        <button onClick={handleOpen}>Admin Portal</button>
      )
    }
  }

  return(
    <div>
      {checker()}
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div>
          <MovieForm/>
        </div>
        
      </Modal>
    </div>
  )
}

const msp = state => ({
  user: state.session.user,
  token: state.session.token
})

const mdp = dispatch => ({
})


export default connect(msp, mdp)(AdminCheck)