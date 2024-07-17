import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div className='container'>
        <nav>
        <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
                <NavLink to="/" activeClassName="active" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contact" activeClassName="active" className="nav-link">Contact</NavLink>
            </li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar
