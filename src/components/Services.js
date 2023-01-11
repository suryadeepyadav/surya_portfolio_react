import React from 'react'
import './css/services.css';

const Services = (props) => {
  return (
    <div className='services'>
        <img src={props.imgname} alt="" className='simage' />
        <h2>{props.name}</h2>
        <p>Lorem ipsum dolor.</p>      
    </div>
  )
}

export default Services
