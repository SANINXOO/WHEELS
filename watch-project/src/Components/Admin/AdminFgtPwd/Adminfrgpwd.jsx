import axios from 'axios'
import './Adminforgot.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Adminfrgpwd = () => {

    const [val,setVal]=useState({
        username:"",
        email:"",
        password:""
      })

      const GetData=(e)=>{
        setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
        console.log(val.password);
      }
      

      const EditPwd=async(e)=>{
        e.preventDefault()
        const res = await axios.get(`http://localhost:3003/wholewatch/getemail/${val.username}`)
        let {data}=res
        // console.log(data);
        if(data.email!==val.email){
            alert("Please enter resgistered email")
        }
        else{
          const res= await axios.patch("http://localhost:3003/wholewatch/adminpassword",{ password : val.password })
          console.log(res.data);
          if(res==200){
            alert("Successfully Updated..")
          }
        }
      }
      




    return (
        <div>

            <div className="fulll">
                <div className="container-reg" id="container">
                    <div className="form-container sign-up-container">
                        <form action="#" className='forms'>
                            <h1 className='headingg'>Forgot Password</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span className='spans' >or use your email for registration</span>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#" className='forms' onSubmit={EditPwd} >
                            <h1 className='headingg'>Change It !!!</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="social"><i className="fa fa-google"></i></a>
                                <a href="#" className="social"><i className="fa fa-linkedin"></i></a>
                            </div>
                            <span className='spans'>or use your account</span>
                            <input type="text" placeholder="username" name='username' onChange={GetData} />
                            <input type="email" placeholder="Email" name="email"  onChange={GetData} />
                            <input type="password" placeholder="Newpassword"   name="password" onChange={GetData} />
                            <Link className='social' to={'#'}>Change it Now !!</Link>
                            <button className='signin'>Change</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                                <h1 className='headingg'>Hello, Friend!</h1>
                                <p className='para'>Shop With Us !!! t</p>
                                <Link to={"/Adminlogin"}><button className="ghost" id="signUp">BACK</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </div>
    )
}

export default Adminfrgpwd
