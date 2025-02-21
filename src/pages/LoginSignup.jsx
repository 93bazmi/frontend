import React, { useState } from 'react'
import '../styles/LoginSignup.css';
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import user_icon from '../assets/user.png'

function LoginSignup() {

    const [action,setAction] = useState("Login");

    const [email,setEmail]  = useState('');
    const [password,setPassword] = useState('');

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>

        {/* Login */}
        {action==="Login"?<div></div>:
            <div className='input'>
                <img src={user_icon} alt=''></img>
                <input type='text' placeholder='Name'></input>
            </div>}

            <div className='input'>
                <img src={email_icon} alt=''></img>
                <input type='email' placeholder='Email ID' value={email} onChange={e => setEmail(e.target.value)}></input>
            </div>
            <div className='input'>
                <img src={password_icon} alt=''></img>
                <input type='password' placeholder='Password'></input>
            </div>
        </div>

        {/* Sign Up */}
        {action==="Sign Up"?<div></div>:
        <div className="forgot-password">Forgot Password? <span>Click here!</span></div>}
        
        <div className="submit-container">
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        </div>
    </div>
  )
}

export default LoginSignup