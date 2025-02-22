import React, { useState } from 'react'
import '../styles/LoginSignup.css';
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import user_icon from '../assets/user.png'
import { useNavigate } from 'react-router-dom';

function LoginSignup() {

    const navigate = useNavigate();

    const [action,setAction] = useState("Login");

    const [email,setEmail]  = useState('');
    const [password,setPassword] = useState('');

    // Handle login click
    const handleLogin = () => {
        if (action === "Login") {
            navigate('/select-role'); // Redirect to Information page
        } else {
            setAction("Login"); // Just switch to Login mode
        }
    };

    //submit function
    const handleSubmit = (e) => {
        e.preventDefault();
    }

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
                <input 
                    type='email' 
                    placeholder='Email ID' 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}></input>
            </div>
            <div className='input'>
                <img src={password_icon} alt=''></img>
                <input 
                    type='password' 
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}></input>
            </div>
        </div>

        {/* Sign Up */}
        {action==="Sign Up"?<div></div>:
        <div className="forgot-password">Forgot Password? <span>Click here!</span></div>}
        
        <div className="submit-container">
            {/* ปุ่ม Login */}
            <div 
                className={action==="Sign Up" ? "submit gray" : "submit"} 
                onClick={() => { 
                    if (action === "Sign Up") {
                        setAction("Login"); // ถ้ายังอยู่ที่ Sign Up ให้เปลี่ยนเป็น Login
                    } else {
                        navigate('/select-role'); // ถ้าอยู่ที่ Login แล้ว ให้ไปที่หน้า /information
                    }
                }}
            >
                Login
            </div>

            {/* ปุ่ม Sign Up */}
            <div 
                className={action==="Login" ? "submit gray" : "submit"} 
                onClick={() => { 
                    if (action === "Login") {
                        setAction("Sign Up"); // ✅ เปลี่ยน UI เป็น Sign Up
                    } else {
                        navigate('/select-role'); // ✅ ถ้าอยู่ที่ Sign Up แล้ว ให้ไปหน้า /information
                    }
                }}
            >
                Sign Up
            </div>
        </div>
    </div>
    
  )
}

export default LoginSignup