import React from 'react'
import { useNavigate } from 'react-router'

const Success = () => {
    const navigate = useNavigate();
    function Home(){
        navigate('/')
    }
  return (
    <div>
        <h1>Succefully Booked your Seat</h1>
        <button onClick={Home}>Home</button>
    </div>
  )
}

export default Success