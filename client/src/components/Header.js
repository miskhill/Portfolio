import React from 'react'
import { Link } from 'react-router-dom'

const Header = () =>  {
  
  return (
    <>
    <section id="header" className="">
      <nav className="navbar black">
        <span className="navbar-toggle" id="js-navbar-toggle">
            <li className="link">
              <Link to="/Main" className="textLink">About Me</Link>
            </li>
            <li className="link">
              <Link to="/Tech" className="textLink">Tech Stack</Link>
            </li>
            <li className="link">
              <Link to="/Project" className="textLink">My Projects</Link>
            </li>
        </span>
      </nav>
      <div className="logoFlex ml14">
        <h2> Gary Smith - FullStack Developer </h2>
      </div>
    </section>
    </>
  )
}

export default Header