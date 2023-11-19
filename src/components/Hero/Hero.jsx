import React from 'react'
import icon from '../assets/hand_icon.png'
import hero from '../assets/hero_image.png'
import './Hero.css'

export default function Hero() {
  return (
    <div className='hero'>
      <div className="left-div">
        <h1>NEW ARRAIVALS ONLLY</h1>
        <p>New <img src={icon} alt="" /></p>
       <p>Collections for Everyone</p>
        <button className="latbut">Latest Collections</button>
      </div>
      <div className="right-div">
        <img src={hero} alt="" />
      </div>
    </div>
  )
}
