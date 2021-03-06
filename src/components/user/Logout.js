import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
//material ui stuff
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Logout(props) {
    
  const logout = () =>{
    props.isLogout()
  }
    useEffect(()=>{
        //chnages state to false and triggers the dialog box
         logout()
        //clears the token from local storage
        localStorage.removeItem('token')
      },[])
 
    return (
        <Dialog
          open={true}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
         >
          <DialogTitle id="alert-dialog-title">{"You Have Been Succesfully Logged Out"}</DialogTitle>
          <DialogActions>
              <Link to='/' style={{textDecoration:'none'}}><Button color="primary">sign in  </Button></Link>
          </DialogActions>
        </Dialog>
    )
}
