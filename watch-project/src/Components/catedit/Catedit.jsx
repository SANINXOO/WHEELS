import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


const Catedit = () => {
    const navigate= useNavigate();
  const {id}=useParams()
  const[val,setVal]=useState({
    categoryname:"",
    description:''
  })
  const getData=async()=>{
    const res = await axios.post(`http://localhost:3003/wholewatch/getcategorydetails/${id}`);
    setVal(res.data);
  }
  useEffect(()=>{
    getData()
  },[])
//////////edit category data//////

const getDatas=(e)=>{ 
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
}

const editData=async(e)=>{
    e.preventDefault()
    console.log(val)
    
    const res=await axios.patch(`http://localhost:3003/wholewatch/editcategorydetails/${id}`,{...val})
    if(res.status!=200){
      console.log(res.status);
      alert("Data Not Edited")
    }else{
        setTimeout(()=>{
            navigate("/adminhome");
        },1000);
    }
  }
  return (
    <div>
        <div className="fulll">
                <div className="container-reg" id="container">
                    <div className="form-container sign-up-container">
                        <form action="#" className='forms'>
                            <h1 className='headingg'></h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span className='spans' >Add category to your wish list</span>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#" className='forms' onSubmit={editData}  >
                            <h1 className='headingg'> Category </h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="social"><i className="fa fa-google"></i></a>
                                <a href="#" className="social"><i className="fa fa-linkedin"></i></a>
                            </div>
                            <span className='spans'>Add Categories Now</span>
                            <input type="text" placeholder="Category Name" name='category_name' value={val.category_name}  onChange={getDatas}  />
                            <input type="text" placeholder="Description" name="Description"  value={val.Description}  onChange={getDatas} />
                            <Link className='social' to={'#'}>Various Category !!</Link>
                            <button className='signin' onClick={editData}>Submit</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                                <h1 className='headingg'> Wheel add!</h1>
                                <p className='para'>Add With Us !!! t</p>
                                <Link to={"#"}><button className="ghost" id="signUp">EXplore Now !!</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>









      
    </div>
  )
}

export default Catedit
