import './Newsletter.css'
import React from 'react'

function Newsletter() {
  return (
    <div className='new-letter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className='input'>
        <input type="email" placeholder='your Email is' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
