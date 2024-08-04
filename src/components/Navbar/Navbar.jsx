import React from 'react'
import './Navbar.css'
import { IoSearch } from "react-icons/io5";
import { FaUser, FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-left">
        <p>New Drops</p>
        <p>Men</p>
        <p>Women</p>
      </div>
      <div className="nav-center">
        <p>KICKS</p>
      </div>
      <div className="nav-right">
        <IoSearch />
        <FaUser />
        <FaShoppingCart />
      </div>
    </div>
  )
}

export default Navbar
