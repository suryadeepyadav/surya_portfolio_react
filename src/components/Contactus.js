import React from 'react'
import './css/contact.css'

const Contactus = () => {
  return (
    <div className='contact' id='contact1'>
      <div className='personal'>
        <div className='pitem'>
        <h4> Phone</h4>
        <p> +61 123 456 789</p>
        <p> +91 7844517845</p>
        </div>
        <div className='pitem' id='email1'>
        <h4>email</h4>
        <p>v@gmail.com</p>
        <p>s@gmail.com</p>
        </div>
        <div className='pitem'id='add'>
        <h4> address</h4>
        <p> 123 Ahmedabad , Gujrat</p>
        <p> 123 Ahmedabad , Gujrat</p>
        </div>
      </div>
      <div className='cform'>
        <label>Name</label>
        <input type="text" placeholder='Enter your name'/>
        <label>Email</label>
        <input type="email" placeholder='Enter your email'/>
        <label>Message</label>
        <textarea name="" id="" cols="30" rows="5" placeholder='Enter your message'></textarea>
        <button><h2>Send</h2></button>
      </div>
    </div>
  )
}

export default Contactus
