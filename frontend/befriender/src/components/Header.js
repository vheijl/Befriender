import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="header">
      <h1> Befriender </h1>
        <nav className="navbar navbar-light bg-dark">
            <Link to="/"> Login </Link>
            <Link to="/search"> Search </Link> 
            <Link to="/chat"> Chat </Link>     
        </nav>
    </div>
  );
}

export default Header;
