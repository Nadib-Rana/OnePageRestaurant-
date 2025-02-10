import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';  // Import the CSS file

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
