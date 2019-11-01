import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {

  let isLoggedIn = props.isLoggedIn;

  return (
    <div className="header">
      <h1> Befriender </h1>
      <nav className="navbar navbar-light bg-dark">
        {!isLoggedIn &&
          <>
            <Link to="/"> Login / Register </Link>
          </>
        }
        {
          isLoggedIn &&
          <>
            <Link to="/search"> Search </Link>
            <Link to="/chat"> Chat </Link>
            <Link to="/logout"> Logout </Link>
          </>
        }
      </nav>
    </div>
  );
}

export default Header;
