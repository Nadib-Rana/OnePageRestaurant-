import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';  // Import the CSS file

function NavBar() {
  return (
    <nav>
      <ul className="navbar">
        <li className="left">
          <img src="/path-to-your-logo.png" alt="Logo" />
        </li>
        <li className="middle">
          <li className="middle">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/contact">Contact</Link>
          </li>

        </li>
        <li className="right">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
