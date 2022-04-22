import ReactTooltip from 'react-tooltip';
import React,{useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom";

import '../../src/App.css';
const axios = require('axios');
const ODC = () => {
  const navigate = useNavigate()
  const [available,setAvailable]=useState("Available");
  const [seatList, setSeatList]=useState([])
  const [allList,setAllList]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3002/allSeat").then(res=>{
      setSeatList(res.data);
      res.data.forEach((value)=>{
        document.getElementById(value).setAttribute("class","btn btn-danger zoom");
        
      
      });
      
      
    });

    axios.get("http://localhost:3002/getAllData").then(res=>{
      setAllList(res.data);
    })
    
  },[]);

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
    navigate("/fill/"+value, {state:{type:"ODC"}})
    }
    else{
      
      
      console.log("Not Available")
    }
  }
  return (
    <div className='container' >
     
      <div className='row'>
     
      
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><ReactTooltip /><button className='btn btn-success zoom' id="s1" value='s1' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S1</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s2" value='s2' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S2</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s3" value='s3' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S3</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s4" value='s4' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S4</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s5" value='s5' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S5</button></div>
        <div className='col-1'></div>

        <div className='col-1'></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s5" value='s6' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S6</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s5" value='s7' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S7</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s5" value='s8' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S8</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s5" value='s9' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S9</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s10" value='s10' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S10</button></div>

      </div>
      <div className='row pt-5'>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s11" value='s11' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S1</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s12" value='s12' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S2</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s13" value='s13' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S3</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s14" value='s14' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S4</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s15" value='s15' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S5</button></div>
        <div className='col-1'></div>

        <div className='col-1'></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s16" value='s16' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S6</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s17" value='s17' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S7</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s18" value='s18' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S8</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s19" value='s19' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S9</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s20" value='s20' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S10</button></div>

      </div>

      <div className='row pt-5'>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s21" value='s21' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S1</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s22" value='s22' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S2</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s23" value='s23' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S3</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s24" value='s24' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S4</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s25" value='s25' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S5</button></div>
        <div className='col-1'></div>

        <div className='col-1'></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s26" value='s26' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S6</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s27" value='s27' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S7</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s28" value='s28' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S8</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s29" value='s29' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S9</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s30" value='s30' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S10</button></div>

      </div>

      <div className='row pt-5'>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s31" value='s31' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S1</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s32" value='s32' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S2</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s33" value='s33' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S3</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s34" value='s34' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S4</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s35" value='s35' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S5</button></div>
        <div className='col-1'></div>

        <div className='col-1'></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s36" value='s36' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S6</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s37" value='s37' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S7</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s38" value='s38' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S8</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s39" value='s39' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S9</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s40" value='s40' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S10</button></div>

      </div>

      <div className='row pt-5'>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s41" value='s41' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S1</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s42" value='s42' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S2</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s43" value='s43' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S3</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s44" value='s44' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S4</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s45" value='s45' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S5</button></div>
        <div className='col-1'></div>

        <div className='col-1'></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s46" value='s46' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S6</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s47" value='s47' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S7</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s48" value='s48' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S8</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s49" value='s49' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S9</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s50" value='s50' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S10</button></div>

      </div>
    </div>
  )
}

export default ODC