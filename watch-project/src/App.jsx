import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Index from './Components/Body/Index'
import Adminlogin from './Components/Admin/Adminlogin/Adminlogin'
import Adminregister from './Components/Admin/Adminregister/Adminregister'
import Adminfrgpwd from './Components/Admin/AdminFgtPwd/Adminfrgpwd'

import Category from './Components/Admin/Category/Category'
import Products from './Components/Admin/Products/Products'
import Catedit from './Components/catedit/Catedit'
import AdminHome from './Components/Admin/AdminHome/AdminHome'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        
      <Route path='/' Component={Index}/>
      <Route path='/Adminlogin' Component={Adminlogin}/>
      <Route path='/Adminhome' Component={AdminHome}/>
      <Route path='/Adminregister' Component={Adminregister}/>
      <Route path='/Adminfrgpwd' Component={Adminfrgpwd}/>
      <Route path='/Category' Component={Category}/>
      <Route path='/editcategory/:id' Component={Catedit}/>
      <Route path='/products' Component={Products}/>

      </Routes>
      
      </BrowserRouter>

    </>
  )
}

export default App
