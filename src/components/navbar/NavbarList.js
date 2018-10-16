import React from "react";
import { Link, withRouter } from 'react-router-dom';
import auth0Client from '../auth';

function NavbarList(props){
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };


  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        {!auth0Client.isAuthenticated() && <button onClick={auth0Client.signIn} className="btn btn-primary nav-btn"></button>}
        {auth0Client.isAuthenticated() && <div>
          <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
          <button className="btn btn-dark" onClick={() => {signOut()}}>Sign Out</button>
        </div>}

        </li>
      </ul >
    );
}

export default withRouter(NavbarList);
