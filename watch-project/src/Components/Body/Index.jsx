
import React from 'react'
import './Index.css'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>
      {/* ... (the commented out code remains unchanged) ... */}
     
      <div className='mainimg'> 
      <nav>
        <div className="wrapper">
          <div className="logo"><a  href="#"><h1>F1</h1></a></div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            
            <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
            <li>
             <span> <Link to={'/Adminlogin'} id='Linkkkkss'><span id='fonts'>Login</span></Link> </span>
          </li>
            <li><a id='fonts' href="#">Home</a></li>
            <li><a id='fonts' href="#">About</a></li>
           
           
           
            <li><a href="#">Feedback</a></li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
        </div>
      </nav>

      {/* <div className="body-text">
        <div className="title">Responsive Dropdown and Mega Menu</div>
        <div className="sub-title">using only HTML & CSS</div>
      </div> */}
      </div>

      <div className='container L-F-content'>
        <div className='left1'>
          <h4>Spoetrs car</h4>
          <h1>START YOUR ENGINE</h1>
          <p>Ferrari S.p.A. (/fəˈrɑːri/; Italian: [ferˈraːri]) is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded in 1939 by Enzo Ferrari (1898–1988), the company built its first car in 1940, adopted its current name in 1945, and began to produce its current line of road cars in 1947. Ferrari became a public company in 1960, and from 1963 to 2014 it was a subsidiary of Fiat S.p.A. It was spun off from Fiat's successor entity, Fiat Chrysler Automobiles, in 2016.</p>
        </div>
        <div className='right1'>
          <div className='fff'>
            <img src="../../../public/ferrari-sf-23-1080x2400-10418.jpg" alt="" />
          </div>
        </div>


      </div>
      <div className='container-fluid flex-images'>
       <div className='left2'>
       <div className='car-images'>
          <img src="../../../public/7.jpeg" alt="" />

        </div>
        <div className='carspec'>
          <h4>collection</h4>
          <h1>FESTIVE SEASON</h1>
        </div>
       </div>
        <div className='right2'>
        <div className='car-images'>
          <img src="../../../public/28357d78-3a1a-4cbe-9700-dfba7544ccae.jpeg" alt="" />

        </div>
        <div className='carspec'>
          <h4>collection</h4>
          <h1>INCREDIBLE GARAGE WITH SWIZZ BEATS</h1>
        </div>
        </div>
      </div>
      <div className='container-fluid flex-images'>
       <div className='left2'>
       <div className='car-images'>
          <img src="../../../public/13ferrari-auction-02-mediumSquareAt3X.jpg" alt="" />

        </div>
        <div className='carspec'>
          <h4>collection</h4>
          <h1>PRE_OWNED</h1>
        </div>
       </div>
        <div className='right2'>
        <div className='car-images'>
          <img src="../../../public//FERRARI_499P_MODIFICATA_REAR_34.jpg" alt="" />

        </div>
        <div className='carspec'>
          <h4>collection</h4>
          <h1>FESTIVE SEASON</h1>
        </div>
        </div>
      </div>
      <div className='container-fluid flex-images'>
       <div className='left2'>
       <div className='car-images'>
          <img src="../../../public/image.avif" alt="" />

        </div>
        <div className='carspec'>
          <h4>collection</h4>
          <h1>F1 - BEATS</h1>
        </div>
       </div>
        <div className='right2'>
        <div className='car-images'>
          <img src="../../../public/F8 Spider White Nr.812-3.webp" alt="" />

        </div>
        <div className='carspec'>
          <h4>collection</h4>
          <h1>ROARING-50'S</h1>
        </div>
        </div>
      </div>
      {/* /////footer///// */}

      <div className='footer1'>
   <div className='footer-contents'>
     <div className='footer-contents-head'>VISIT OFFLINE STORE</div>
     <div className='footer-content'>Jayanagar, Bangalore:</div>
     <div className='footer-content'><a href="">Get Directions</a></div>
     <div className='footer-content'></div>

   </div>
   <div className='footer-border'></div>
   <div className='footer-contents'>
     <div className='footer-content'>Contact Us</div>
     <div className='footer-content'>FAQ</div>
     <div className='footer-content'>Blogs</div>
     <div className='footer-content'>Terms & Conditions</div>
     
     <div className='footer-content'></div>

   </div>
   <div className='footer-border'></div>
   <div className='footer-contents'>
     <div className='footer-content'>TRACK ORDER</div>
     <div className='footer-content'>PLACE RETURN/EXCHANGE REQUEST</div>
     <div className='footer-content'>RETURNS/EXCHANGE POLICY</div>
     <div className='footer-content'></div>

   </div>
   <div className='footer-border'></div>
   <div className='footer-contents'>
     <div className='footer-contents-head'>CUSTOMER CARE</div>
     <div className='footer-content'>Timings: 10 AM - 8 PM (Mon - Sun)</div>
     <div className='footer-content'>Whatsapp : +91 6366966283</div>
     <div className='footer-content'>Instagram: @snitch.co.in</div>
    
     <div className='footer-content'></div>

   </div>
  

 </div>
      
        
     
    </div>
  )
}

export default Index

