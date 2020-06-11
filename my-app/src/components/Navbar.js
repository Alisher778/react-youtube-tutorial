import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <nav>
        <a href="#s">Logo</a>
        <ul>
          <li><NavLink activeStyle={{ color: 'yellow' }} to="/sign-in">Login In</NavLink></li>
          <li><NavLink activeStyle={{ color: 'red' }} to="/sign-up">Sign Up</NavLink ></li>
        </ul>
      </nav>
    </header>
  )
}
