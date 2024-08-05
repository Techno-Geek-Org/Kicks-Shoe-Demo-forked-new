import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className='login'>
      <div className="log-left">
        <h2>Register</h2>
        <p className='sign-para'>Sign up with</p>
        <div className="log-buttons">
          <button><i><FcGoogle /></i></button>
          <button><i><FaApple /></i></button>
          <button><i><FaFacebook /></i></button>
        </div>
        <p className='name-para'>Or</p>
        <p className='name-para'>Your Details</p>
        <div className="sign-input">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <div className="sign-check">
          <p>Gender</p>
          <select name="Select your gender" id="">
            <option value="Male">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <p className='name-para'>Login Details</p>
        <div className="sign-input">
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
        </div>
        <div className="check-confirm">
          <input type="checkbox" name="" id="" />
          <p>By clicking 'Log In' you agree to our website KicksClub Terms & Conditions, Kicks Privacy Notice and Terms & Conditions.</p>
        </div>
        <p className='create-acc'>Already have an account ? <Link to='/login'><span>Log in</span></Link></p>
        <button className='email' type='submit'>REGISTER</button>
      </div>
      <div className="sign-right">
        <h2>Join Kicks Club Get Rewarded Today.</h2>
        <p>As kicks club member you get rewarded with what you love for doing what you love. Sign up today and receive immediate access to these Level 1 benefits:</p>
        <ul>
          <li>Free Shipping</li>
          <li>A 15% off voucher for your next purchase​</li>
          <li>Access to Members Only products and sales​</li>
          <li>Access to adidas Running and Training apps</li>
          <li>Special offers and promotions​</li>
        </ul>
        <p className='para'>Join now to start earning points, reach new levels and unlock more rewards and benefits from adiClub.​</p>
        <button className='join' type='submit'>JOIN THE CLUB</button>
      </div>
    </div>
  )
};

export default Signup;
