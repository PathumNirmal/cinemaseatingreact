import React from 'react'

import './App.css';
import Balcony from './components/Balcony';
import Box from './components/Box';
import ODC from './components/ODC';
import ChooseMenu from './components/SelectMenu'
import {Route, Routes, useNavigate} from "react-router-dom";
import { FillPage } from './components/FillPage';
import Success from './components/Success';
import { Admin } from './components/Admin';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
export default function App() {
  const navigate=useNavigate();
  // optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}
  function admin(){
    navigate("/admin")
  }
  return (
    <div className='container d-flex justify-content-center d-flex align-items-center' style={{height:"100vh"}}>
   
    <div className="shadow p-3 m-3 bg-white rounded main">
    
    <div className='row d-flex justify-content-end'>
      <div className='col-12'><button className='btn btn-info ' onClick={admin}>Admin</button></div>
    
    <div className='col'>
      
    <ChooseMenu></ChooseMenu>
    </div>
      
    </div>
    <AlertProvider template={AlertTemplate} {...options}>
   
     <div className='row d-flex justify-content-center ' style={{height:"95%"}}>
        <div className="col-9 shadow pt-3" style={{width: '98%', height:"100%"}}>

         
        
                     <Routes>
                        
                     <Route exact path="/" element={<ODC/>}></Route>
                        <Route exact path="box" element={<Box/>}></Route>
                        <Route exact path="balcony" element={<Balcony/>}></Route>
                        <Route exact path="success" element={<Success/>}></Route>
                        <Route exact path="admin" element={<Admin/>}></Route>
                        <Route exact path="fill/:seatNo" element={<FillPage/>}></Route>
                    
                    </Routes>  
         
             </div>
             </div>
             
  </AlertProvider>
    </div>
    <div>
   
    </div>
    </div>
  )
}
