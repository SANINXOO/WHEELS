import React, { useState } from 'react'
import './Adminlogin.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Adminlogin = () => {


  const navigate=useNavigate()
  const [email,setEmail]=useState('')
const [password,setPassword]=useState('')


const Logining=async(e)=>{
  e.preventDefault()
try {
  const res=await axios.post("http://localhost:3003/wholewatch/adminlogin",{
    email:email,
    password:password
})
const data=res.data;
console.log(res.data);
if(res.status!==404){
  const admin_token=data.token
  localStorage.setItem("admin_token",JSON.stringify(admin_token))
  alert("Successfully logined")
  navigate("/Adminhome")
}
} catch (error) {
  console.log(error);
}
}



  return (
    <div>

  <div className="fulll">
  <div className="container-reg" id="container">
      <div className="form-container sign-up-container">
        <form action="#"  className='forms'>
          <h1 className='headingg'>Create Account</h1>


          <div className="social-container">
            <a href="#" className="social"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          
          <span className='spans' >or use your email for registration</span>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#" className='forms'>
          <h1 className='headingg'>Login in</h1>
          <div className="social-container">
          <a href="#" className="social"><i className="fa fa-facebook"></i></a>
            <a href="#" className="social"><i className="fa fa-google"></i></a>
            <a href="#" className="social"><i className="fa fa-linkedin"></i></a>
          </div>
          <span className='spans'>or use your account</span>
          <input type="email" placeholder="Email" name="email"  onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" name="password"  onChange={(e)=>setPassword(e.target.value)} />
          <Link className='social' to={'/Adminfrgpwd'}>Forgot your password?</Link>
          <button className='signin'onClick={Logining}>Login</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <h1 className='headingg'>Hello, Car Guy!</h1>
            <p className='para'>Dont Have any Account</p>
            
            <Link to={"/Adminregister"}><button className="ghost" id="signUp">Register Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  </div>


      
    </div>
  )
}

export default Adminlogin
