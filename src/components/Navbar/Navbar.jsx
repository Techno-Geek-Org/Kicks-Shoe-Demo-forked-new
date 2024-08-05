import React from 'react'
import './Navbar.css'
import { IoSearch } from "react-icons/io5";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-left">
        <p>New Drops</p>
        <p>Men</p>
        <p>Women</p>
      </div>
      <div className="nav-center">
        <Link to='/'><img className='nav-logo' src="/assets/logo-kicks.png" alt="" /></Link>
      </div>
      <div className="nav-right">
        <Link to='/login'><button className='log'>Log In</button></Link>
        <FaShoppingCart />
      </div>
    </div>
  )
}

export default Navbar
