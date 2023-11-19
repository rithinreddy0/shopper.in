import React, { useState } from 'react'
import './Navbar.css'
import chart from '../assets/cart_icon.png'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
export default function Navbar() {
    const [menu,setMenu] = useState("Shop");
    console.log({menu});
  return (
    <>
        <div className="navbar">
        <div className='logo-img'><Link style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'20px',textDecoration:'none'}} to="/"><img src={logo} alt="Shoppers" /> <p>Shoppers</p></Link></div>
        <ul className="nav-menu">
            
            <li  onClick={()=>{setMenu("Shop")}} ><Link style={{textDecoration:'none'}} to="/">Shop </Link> {menu==="Shop"?<hr/> :<></>}</li>
            <li  onClick={()=>{setMenu("Men")}} > <Link style={{textDecoration:'none'}}to="/men">Men</Link>   {menu==="Men"?<hr/> :<></>}</li>
            <li  onClick={()=>{setMenu("Women")}}><Link style={{textDecoration:'none'}} to="/women">Women</Link>  {menu==="Women"?<hr/> :<></>}</li>
            <li  onClick={()=>{setMenu("Kids")}} ><Link style={{textDecoration:'none'}} to="/kids">Kids</Link>  {menu==="Kids"?<hr/> :<></>}</li>
        </ul>
          <div className="nav-login-cart">
            <Link style={{textDecoration:'none'}}to='./login'><button>Login</button></Link>
            <div className="cart-img"><Link style={{textDecoration:'none'}}to='/cart'><img src={chart} alt="" /></Link></div>
          </div>
        </div>
         
        
    </>
  )
}
