import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-left">
            <div className="foot-para">
                <h1>JOIN OUR KICKSPLUS <br /> CLUB & GET 15% OFF</h1>
                <p>Sign up for free! Join the community.</p>
            </div>
            <div className="foot-input">
                <input type="email" placeholder="Enter your email address"/>
                <button type='submit'>SUBMIT</button>
            </div>
        </div>
        <div className="foot-right">
            KICKS
        </div>
      </div>
      <div className="footer-bottom">
        <div className="foot-about">
            <h2>About us</h2>
            <p>We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.</p>
        </div>
        <div className="foot-lists">
            <h2>Categories</h2>
            <ul>
                <li>Runners</li>
                <li>Sneakers</li>
                <li>Basketball</li>
                <li>Outdoor</li>
                <li>Golf</li>
                <li>Hiking</li>
            </ul>
        </div>
        <div className="foot-companies">
            <h2>Company</h2>
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Blogs</li>
            </ul>
        </div>
        <div className="foot-follow">
            <h2>Follow us</h2>
            <i><FaFacebook /></i>
            <i><FaInstagram /></i>
            <i><FaTwitter /></i>
            <i><FaLinkedin /></i>
        </div>
      </div>
      <div className="copyright">
            <p>&copy; 2024 KicksPlus. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
