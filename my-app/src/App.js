import React from 'react'

import './App.css';
import Balcony from './components/Balcony';
import Box from './components/Box';
import ODC from './components/ODC';
import ChooseMenu from './components/SelectMenu'

import { Route, Routes} from "react-router-dom";


export default function App() {
  return (
    <div className='container d-flex justify-content-center d-flex align-items-center' style={{height:"100vh"}}>
    <div className="shadow p-3 m-3 bg-white rounded main">
      <ChooseMenu></ChooseMenu>
    </div>
    <div>
    <div className='row'>
        <div className="col-9 shadow p-4" style={{width: '80%', marginLeft: "1vw", marginBottom: '2vh' }}>
                    <Routes>
                        
                        <Route exact path="/dashboard/odc" component={ODC}></Route>
                        <Route exact path="/dashboard/box" component={Box}></Route>
                        <Route exact path="/dashboard/balcony" component={Balcony}></Route>
                    
                    </Routes>
         
             </div>
             </div>
    </div>
    </div>
  )
}
