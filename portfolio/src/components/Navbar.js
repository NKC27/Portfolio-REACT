import './NavbarStyles.css'

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>NKC Portfolio</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/About">About Me</Link>
        </li>
        <li>
          <Link to="/Project">Projects</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar