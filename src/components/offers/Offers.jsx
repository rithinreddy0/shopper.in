import './Offers.css'
import React from 'react'
import img1 from '../assets/exclusive_image.png'
function Offers() {
  return (
    <div className='offers'>
        <div className="left-offers">
            <center><h1>
              Offers Exclisive offers only for you</h1>
            <p>ONLY ON BEST SELLERS</p>
            <button>Check Now</button></center>
        </div>
         <center>
         <div className="right-offers">
            <img src={img1} alt="" />
        </div>
        
         </center>
      
    </div>
  )
}

export default Offers
