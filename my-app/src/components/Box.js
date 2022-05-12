import ReactTooltip from 'react-tooltip';
import React,{useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom";
import { useAlert } from 'react-alert'
import '../../src/App.css';
const axios = require('axios');

const Box = () => {
  const alert = useAlert()
  const navigate = useNavigate()
  const [available,setAvailable]=useState("Available");
  const [seatList, setSeatList]=useState([])
  const [allList,setAllList]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3002/allSeat").then(res=>{
      setSeatList(res.data);
      res.data.forEach(value=>{
        var thenum = value.replace( /^\D+/g, '');
        if(thenum>=111 & thenum<=116){
        document.getElementById(value).setAttribute("class","btn btn-danger zoom size-box");
        }
      })
    });
    
    
  },[]);
  useEffect(()=>{
    axios.get("http://localhost:3002/getAllData").then(res=>{
      setAllList(res.data);
    })
  },[])

  function Cheking(value){
    if(!seatList.includes(value)){
      setAvailable("Available")
    }else{
      allList.find(function(post,index){
        if(post.seatNo==value){
          setAvailable("This seat recerved for : " + post.ownerName);
        }
      })
    }
  }
  
  
  function Booking(value){
    if(!seatList.includes(value)){
    navigate("/fill/"+value, {state:{type:"Box"}})
    }
    else{
      
      
      alert.show('This Seat is not available')
    }
  }
  return (
    <div>
      <div className='row pt-5 pb-5'>
        <div className='col-4 d-flex justify-content-center d-flex align-items-center'><ReactTooltip /><button className='btn btn-success zoom size-box' id="s111" value='s111' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>One</button></div>
        <div className='col-4 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom size-box' id="s112" value='s112' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>Two</button></div>
        <div className='col-4 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom size-box' id="s113" value='s113' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>Three</button></div>
       
      </div>
      <div className='row pt-5'>
        <div className='col-4 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom size-box' id="s114" value='s114' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>Four</button></div>
        <div className='col-4 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom size-box' id="s115" value='s115' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>Five</button></div>
        <div className='col-4 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom size-box' id="s116" value='s116' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>Six</button></div>
       
      </div>
    </div>
  )
}

export default Box