import React from 'react'
import { useNavigate, useLocation} from 'react-router'

const Success = () => {
    const location=useLocation();
    const navigate = useNavigate();
    function Home(){
        const path=location.state.type;
        if(path==="ODC"){
          navigate('/')
        }
        else if(path==="Box"){
          navigate('/box')
        }
        else{
          navigate('/balcony')
        }
       
    }
  return (
    <div>
        <h1>Succefully Booked your Seat</h1>
        <button onClick={Home}>Home</button>
    </div>
  )
}

export default Success