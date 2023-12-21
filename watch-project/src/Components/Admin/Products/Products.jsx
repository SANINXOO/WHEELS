import React,{useState,useEffect} from 'react'
import './Product.scss'
import axios from 'axios'

const Products = () => {
  const [getCat,setCat]=useState([])
  const [val,setVal]=useState({
    productname:"",
    category_name:"",
    description:"",
    price:"",
    size_S:"",
    size_M:"",
    size_L:"",
    size_XL:"",
    stock:"",
    images:""
  })
  const GetData=(e)=>{ 
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    console.log(val);
  }

  const getCategory=async()=>{
    const res=await axios.get("http://localhost:3003/wholewatch/categorygetdata")
    setCat(res.data)
    console.log(getCat);
  }
  useEffect(()=>{
    getCategory()
  },[])

  const addProduct=async(e)=>{
   try {
    e.preventDefault()
    let formData = new FormData();
    console.log(Object.entries(val));
    Object.entries(val).forEach(item => formData.append(item[0],item[1]));
    if (val.images && val.images.length > 0) {
      for (const image of val.images) {
        formData.append('images', image);
      }
    }
    const res = await axios.post("http://localhost:3003/wholewatch/addProduct", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if(res.status!=404){
      alert("Product Added")
    }
   } catch (error) {
      alert("error",error)
   }
  }


  return (
    <div>
       <div className='cmain'>

<div className="modal2">
<form className="form" onSubmit={addProduct}  >
  <div className='head2'>
  
  <div className='chead'> Add Product</div>
  </div> 

  <div className='pmain'>

  <div className='pleft'>
  <div className="credit-card-info--form">
    <div className="input_container">
      <label  className="input_label">Product Name</label>
      <input id="password_field" className="input_field" type="text" name="productname" onChange={GetData} title="Inpit title" placeholder=""/>
    </div>
    <div className="input_container">
      <label  className="input_label">Category Name</label>
      <select name="category_name" id="category"  className="select" onChange={GetData}>
     {
      getCat.map((data,index)=>
        <option value={data.category} key={index}>{data.category_name}</option>
     )
     }
      </select>
    </div>
    <div className="input_container">
      <label  className="input_label">Description</label>
      <textarea className="input_field3" name="description" id="" cols="30" onChange={GetData} rows="10"></textarea>
    </div>
    <div className="input_container">
      <label  className="input_label">Price</label>
      <input id="password_field" className="input_field" type="text" name="price" onChange={GetData} title="Inpit title" placeholder=""/>
    </div>
    <div className="input_container">
      <label  className="input_label">Size</label>
      <div className='sizeboderbottom'></div>
     <div className='sizes'>

     <div className='sizesub'>
        <div> <label  className="input_label">15</label></div>
        <div> <input id="password_field" className="input_field4" type="text" name="size_S" title="Inpit title"  onChange={GetData} placeholder=""/> </div>
      
      </div>
      <div  className='sizesub'>
        <div> <label  className="input_label">16</label></div>
        <div> <input id="password_field" className="input_field4" type="text" name="size_M" title="Inpit title"  onChange={GetData} placeholder=""/> </div>
      
      </div>
      <div  className='sizesub'>
        <div> <label  className="input_label">17</label></div>
        <div> <input id="password_field" className="input_field4" type="text" name="size_L" title="Inpit title"  onChange={GetData} placeholder=""/> </div>
      
      </div>
      <div  className='sizesub'>
        <div> <label  className="input_label">18</label></div>
        <div> <input id="password_field" className="input_field4" type="text" name="size_XL" title="Inpit title"  onChange={GetData} placeholder=""/> </div>
      
      </div>
     </div>
     
    </div>
    <div className="input_container">
      <label  className="input_label">Stock</label>
      <input id="password_field" className="input_field" type="text" name="stock" title="Inpit title" onChange={GetData}  placeholder=""/>
    </div>
   
 
  </div>
  </div>
  <div className='pright'>
   
   <div className="input_container2">
    
   <div className="container5"> 
 
  <div className='pimg'>
    <img src="../../../../public/Vossen-6-Lug-Wheel-Campaign-15-copy.jpg" alt="" />
   </div>
<input   multiple type="file" name='images' onChange={e => setVal(p => ({...p,[e.target.name]: e.target.files}))} /> 

  
  {/* <label  className="footer"> 
    <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"><path d="M15.331 6H8.5v20h15V14.154h-8.169z"></path><path d="M18.153 6h-.009v5.342H23.5v-.002z"></path></g></svg> 
    <p>Choose File</p> 
    
  </label>  */}
  
</div>

  
    </div>
  </div>
  </div>
 

    <button className="purchase--btn">Add</button>
</form>
</div>
</div> 
      
    </div>
  )
}

export default Products

