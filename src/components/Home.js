import React from 'react';
import{BsFacebook} from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs'
import './css/home.css';
// import logoimg from './images/mylogo.png';

const Home = () => {
  return (
    <div className='home' id='home1'>
      <div className='profilimg'>
        {/* <img src={logoimg} alt="" className='' /> */}
      </div>
      <div className='name'>
        <h3>My name is Yadav surya</h3>
      </div>
      <div>
        <p>React/Node Developer</p>
      </div>
      <div className='meadia'>
        <BsFacebook/>
        <BsInstagram/>
        <BsLinkedin/>
      </div>
      <div className='resum'>
        <button>Download CV</button>
      </div>
    </div>
  )
}

export default Home
