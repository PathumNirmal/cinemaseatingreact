import React from 'react'

import './App.css';
import Balcony from './components/Balcony';
import Box from './components/Box';
import ODC from './components/ODC';
import ChooseMenu from './components/SelectMenu'
import {Route, Routes} from "react-router-dom";


export default function App() {
  return (
    <div className='container d-flex justify-content-center d-flex align-items-center' style={{height:"100vh"}}>
    
    <div className="shadow p-3 m-3 bg-white rounded main">
    <div className='row'>
    <div className='col'>
    <ChooseMenu></ChooseMenu>
    </div>
      
    </div>
     <div className='row d-flex justify-content-center ' style={{height:"95%"}}>
        <div className="col-9 shadow pt-3" style={{width: '98%', height:"100%"}}>

         
        
                     <Routes>
                        
                        <Route exact path="/" element={<ODC/>}></Route>
                        <Route exact path="box" element={<Box/>}></Route>
                        <Route exact path="balcony" element={<Balcony/>}></Route>
                    
                    </Routes>  
         
             </div>
             </div>
    </div>
    <div>
   
    </div>
    </div>
  )
}
