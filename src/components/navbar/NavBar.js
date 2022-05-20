import React from 'react'
import "./NavBar.scss"
import logo from"../../logo.png"
import {NavLink} from "react-router-dom"
const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt ="city tours logo"/>
        <div className='nav-links'>
            <NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} to="/">Home</NavLink>
            <NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} to="/about">About</NavLink>
            <NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} to="/tours">Tours</NavLink>
        </div>
    </div>
  )
}

export default NavBar