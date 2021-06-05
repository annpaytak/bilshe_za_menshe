import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Logo from '../../assets/logo.svg'

const index = () => {
  return (
    <Link to="/first">
      <div className="welcome-screen_container">
        <img src={Logo} alt=""/>
      </div>
    </Link>
  );
};

export default index;