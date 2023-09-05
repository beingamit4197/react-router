import React from 'react'
import { NavLink } from 'react-router-dom'

export const navLinkStyle = ({ isActive }) => {
    return {
        fontWeight: isActive ? 'bold' : 'normal',
        textDecoration: isActive ? 'none' : 'underline',
    }
}

export const Navbar = () => {   
  return (
    <nav className='primary-nav'>
        <NavLink style={navLinkStyle} to='/'>Home</NavLink>
        <NavLink style={navLinkStyle} to='/about'>About</NavLink>
        <NavLink style={navLinkStyle} to='/products'>Products</NavLink>
        <NavLink style={navLinkStyle} to='/users'>Users</NavLink>
    </nav>
  )
}
