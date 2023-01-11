import React from 'react';
import './css/about.css';

const About = () => {
  return (
    <>
      <h2 style={{ marginLeft: '1.6em', marginTop: '.4em', marginBottom: '.4em', color: 'rgb(126, 34, 206)' }}>About Me</h2>
      <div className='mainabout' id='about1'>

        <div className='aboutimg'>

        </div>
        <div className='about'>
          <div className='abouttext'>
            <p> I'm Creative Director and UI/UX Designer from Ahmedabad,Gujrat working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
          </div>
          <h2 style={{ textAlign: 'left', marginLeft: '-4.9em', marginTop: '.6em' }}>Personal info</h2>
          <div className='details'>
            <div className='ditem'>
              <p>Phone NO:</p>
              <p> +61 123 456 789</p>
            </div>
            <div className='ditem'>
              <p> Address:</p>
              <p> 123 Ahmedabad , Gujrat</p>
            </div>
            <div className='ditem'>
              <p>Email:</p>
              <p>v@gmail.com </p>
            </div>
            <div className='ditem'>
              <p> Birthday:</p>
              <p>10-01-2000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
