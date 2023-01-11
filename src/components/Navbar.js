import React from 'react'
import './css/navbar.css';
// import { Link } from 'react-router-dom';
// import logo from './images/mylogo.jpeg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        {/* <img src={logo} alt="" className='limg' /> */}
        <h2>Syv Solution</h2>
      </div>

      <ul className='nav-items'>
        <li>Home </li>
        <li>About</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default Navbar
