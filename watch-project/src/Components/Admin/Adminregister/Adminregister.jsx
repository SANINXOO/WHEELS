import React, { useState }from 'react'
import './Adminregister.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';


const Adminregister = () => {

  const navigate=useNavigate()
  const[val,setVal]=useState({
    username:"",
    email:"",
    phone:"",
    password:"",
    confirmpassword:""
  });

  const GetData=(e)=>{
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    console.log(val);
  }


  const Register=async(e)=>{
    e.preventDefault();
    const {password,confirmpassword}=val;
      if(password!==confirmpassword){
      alert('Password and Confirm Password do not match!');
    } else {
      const res=await axios.post("http://localhost:3003/wholewatch/addadmin",{...val})
      setVal(res.data)
      console.log(val);
      if(res.status==201){
        alert("Successfully registered")
        navigate("/Adminlogin")
      }
    }
  
  };
  










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
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#" className='forms'>
          <h1 className='headingg'>Register In</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fa fa-facebook"></i></a>
            <a href="#" className="social"><i className="fa fa-google"></i></a>
            <a href="#" className="social"><i className="fa fa-linkedin"></i></a>
          </div>
          <span className='spans'>or use your account</span>
          <input type="text" placeholder="username" name='username' onChange={GetData} />
          <input type="email" placeholder="Email" name='email' onChange={GetData} />
          <input type="text" placeholder="phone" name='phone' onChange={GetData} />
          <input type="password" placeholder="Password"  name='password' onChange={GetData}/>
          <input type="password" placeholder="confirmpassword" name="confirmpassword" onChange={GetData} />
        
         
          <a href="#" className='social'>Enjoy with us</a>
         <Link to={"/Adminlogin"}><button className='signin' onClick={Register}>Register</button></Link> 
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className='headingg'>Welcome Back!</h1>
            <p className='para'>To keep connected with us please login with your personal info</p>
            <Link to={"/Adminlogin"}><button className='signin'>Register</button></Link> 
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className='headingg'>Hello, Car Guy!</h1>
            <p className='para'>Do you have an alredy Account</p>
           
            <Link  to={"/Adminlogin"}> <button className="ghost" id="signUp">lOGIN !</button></Link>
          </div>
        </div>
      </div>
    </div>
  </div>


    
      
    </div>
  )
}

export default Adminregister
