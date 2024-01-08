import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss'

function Navbar() {

  return (
    <nav className='navbar'>
      <NavLink to="/">
        <div>Accueil</div>
      </NavLink>
      <NavLink to="/about" >
        <div>A Propos</div>
      </NavLink>
    </nav>
  )
}

export default Navbar