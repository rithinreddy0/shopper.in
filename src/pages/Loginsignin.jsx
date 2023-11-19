import React from 'react'
import './css/Login.css'

function Loginsignin() {
  return (
    <div className='loginsignin'>
      <div className="login-container">
      <center>Sign Up</center>
      < div className="login-container1">
        <label htmlFor="anme">Name</label>
        <input type="text" placeholder='' name='name' />
        <label htmlFor="email">Email Id</label>
        <input type="email" name='email'/>
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" />
        <button>Continue</button>
        <p>Already have a account <span onClick={()=>{
          return(
            <><h1>hello world</h1></>
          )
        }}>Login in </span></p>

       </div>
      <div className="term-policy">
        <input type="checkbox" name='' id='' />
        <p>By continuting , I agree to the terms and conditions</p>
      </div>
      </div>
      
    </div>
  )
}

export default Loginsignin
