import React from 'react'
import { useNavigate} from "react-router-dom";

const ChooseMenu = () => {
const navigate = useNavigate()
  return (
    <div>
    
        <div className='row'>
            <div className='col-4 d-flex justify-content-center'><button className='btn btn-success menu-button' onClick={()=>{
                            navigate("/")
                        }}>ODC</button></div>
            <div className='col-4 d-flex justify-content-center'><button className='btn btn-info menu-button'onClick={()=>{
                            navigate("/box")
                        }}>BOX</button></div>
            <div className='col-4 d-flex justify-content-center'><button className='btn btn-danger menu-button' onClick={()=>{
                             navigate("/balcony")
                        }}>BALCONY</button></div>
        </div>
        
    </div>
  )
}

export default ChooseMenu