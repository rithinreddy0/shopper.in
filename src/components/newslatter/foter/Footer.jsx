import './Footer.css'
import React from 'react'
import fotlogo from '../../assets/logo_big.png'
import insta from '../../assets/instagram_icon.png'
import printrest from '../../assets/pintester_icon.png'
import whatsapp from '../../assets/whatsapp_icon.png'
function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={fotlogo} alt="" />
            <p>Shoppers</p>
        </div>
        <ul className="footer-links">
            <li>products</li>
            <li>Company</li>
            <li>Offices</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
        <div className="footer-icons">
            <div className="container">
                <img src={insta} alt="" />
            </div>
            <div className="container">
                <img src={whatsapp} alt="" />
            </div>
            <div className="container">
                <img src={printrest} alt="" />
            </div>
            
        </div>
        <hr />
            <div className="footer-copyright">
              
              <p>CopyRight @ 20223 -All Right Reserved</p>
            </div>
      
    </div>
  )
}

export default Footer
