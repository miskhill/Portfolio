import React from 'react'
import { Link } from 'react-router-dom'

const Header = () =>  {
  
  return (
    <>
    <section id="header" className="">
      <nav className="navbar black">
        <span className="navbar-toggle" id="js-navbar-toggle">
            <i className="fas fa-bars"></i>
            <li>
              <Link to="/Main">About Me</Link>
            </li>
            <li>
              <Link to="/Tech">Tech Stack</Link>
            </li>
            <li>
              <Link to="/Project">My Projects</Link>
            </li>
        </span>
      </nav>
      <div className="logoFlex ml14">
        <h2> Gary Smith FullStack Developer </h2>
      </div>
    </section>
    </>
  )
}

export default Header