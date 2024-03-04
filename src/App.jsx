

import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home'
import Login from './Component/Login'
import Logout from './Component/Logout';
import Register from './Component/Register'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Routes>

    <Route path="/" element={<Login />} />
    <Route path= "/register" element={<Register/>} />
    <Route path= "/home" element={<Home/>} />
    <Route path= "/about" element={<About/>} />
    <Route path= "/contact" element={<Contact/>} />
    <Route path= "/logout" element={<Logout/>} />




    </Routes>
 
     {/* <Login/>  */}
     {/* <Register/>  */}
     {/* <Home/> */}
     {/* <About/> */}
     {/* <Contact/> */}


    
    </>
  )
}

export default App
