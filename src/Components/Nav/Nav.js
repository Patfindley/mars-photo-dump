import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import './Nav.css'
import marsIcon from '../../assets/mars_icon.png'

const Nav = () => {
  const [navActive, setNavActive] = useState(false)

  return (
    <div className='nav-container'>
      <div
				className={navActive ? "burger-container open" : "burger-container"}
				onClick={() => setNavActive(!navActive)}>
				<span className="patty top"></span>
				<span className="patty mid"></span>
				<span className="patty bottom"></span>
			</div>
      <h2 className='nav-title'>Mars Eye Candy</h2>
      <img className='nav-icon' src={marsIcon} />
      <div className={navActive ? "nav-open" : "hidden"}>
        <ul className='nav-links'>
          <NavLink
            exact={true}
            to='/'
            activeClassName='nav-selected'>
              <li>HOME</li>
            </NavLink>
            <li>LIKED</li>
            <li>ABOUT</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;