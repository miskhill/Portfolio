import React from 'react'
import { Link } from 'react-router-dom'

const Header = () =>  {
  
  return (
    <>
    <h1>Header/NavBar</h1>
    <li>
      <Link to="/Main">Main</Link>
    </li>
    <li>
      <Link to="/Tech">Tech Stack</Link>
    </li>
    <li>
      <Link to="/Project">My Projects</Link>
    </li>
    </>
  )
}

export default Header