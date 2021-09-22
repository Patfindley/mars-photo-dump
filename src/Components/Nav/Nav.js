import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './Nav.css'
import marsIcon from '../../assets/mars_icon.png'

const Nav = ({ liked }) => {
  const [navActive, setNavActive] = useState(false)

  const mobileNav = () => {
    return (
      <div className='nav-container-mobile'>
        <div
          className={navActive ? "burger-container open" : "burger-container"}
          onClick={() => setNavActive(!navActive)}>
          <span className="patty top"></span>
          <span className="patty mid"></span>
          <span className="patty bottom"></span>
        </div>
        <NavLink
          className='nav-link-icon'
          exact={true}
          to='/'
          >
          <img className='nav-icon' src={marsIcon} alt='mars icon' />
          </NavLink>
        <div className={navActive ? "nav-open" : "hidden"}>
          <ul className='nav-links'>
          <h2 className='nav-title'>Mars Eye Candy</h2>
            <NavLink
              to='/'
              className='nav-link'
              activeClassName='nav-selected'>
                <li>HOME</li>
              </NavLink>
              <NavLink
              exact={true}
              to='/liked'
              className='nav-link'
              activeClassName='nav-selected'>
              <li>LIKED 
                {liked > 0 ? 
                <span className='liked-count'> {liked} </span> : null}
              </li>
              </NavLink>
              <li>ABOUT</li>
          </ul>
        </div>
      </div>
    )
  }

  const desktopNav = () => {
    return (
      <div className='nav-container-desktop'>
        <NavLink
          className='nav-link-icon'
          exact={true}
          to='/'
          >
          <img className='nav-icon' src={marsIcon} alt='mars icon' />
          </NavLink>
        <div className="nav-open">
          <ul className='nav-links'>
          <h2 className='nav-title'>Mars Eye Candy</h2>
            <NavLink
              to='/'
              className='nav-link'
              activeClassName='nav-selected'>
                <li>HOME</li>
              </NavLink>
              <NavLink
              exact={true}
              to='/liked'
              className='nav-link'
              activeClassName='nav-selected'>
              <li>LIKED 
                {liked > 0 ? 
                <span className='liked-count'> {liked} </span> : null}
              </li>
              </NavLink>
              <li>ABOUT</li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    window.innerWidth <= 768 ? mobileNav() : desktopNav()
  )

  
}

export default Nav;