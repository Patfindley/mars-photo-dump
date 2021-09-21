import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import './Nav.css'
import marsIcon from '../../assets/mars_icon.png'

const Nav = () => {
  return (
    <div className='nav-container'>
      <img className='nav-icon' src={marsIcon} />
      <h2 className='nav-title'>Mars Eye Candy</h2>
      <ul className='nav-links'>
        <NavLink
          exact={true}
          to='/'
          activeClassName='nav-selected'>
            <li>HOME</li>
          </NavLink>
          <li>LIKED</li>
      </ul>
    </div>
  )
}

export default Nav;