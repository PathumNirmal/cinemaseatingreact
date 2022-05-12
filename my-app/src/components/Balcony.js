
import ReactTooltip from 'react-tooltip';
import React,{useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom";
import { useAlert } from 'react-alert'
import '../../src/App.css';
const axios = require('axios');
const Balcony = () => {
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
        if(thenum>=71 & thenum<=110){
        document.getElementById(value).setAttribute("class","btn btn-danger zoom");
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
    navigate("/fill/"+value, {state:{type:"Balcony"}})
    }
    else{
      
      
      alert.show('This Seat is not available')
    }
  }
  return (
    <div className='container' >
     
      <div className='row'>
     
      
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><ReactTooltip /><button className='btn btn-success zoom' id="s71" value='s71' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S1</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s72" value='s72' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S2</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s73" value='s73' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S3</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s74" value='s74' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S4</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s75" value='s75' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S5</button></div>
        <div className='col-1'></div>

        <div className='col-1'></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s76" value='s76' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S6</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s77" value='s77' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S7</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s78" value='s78' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S8</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s79" value='s79' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S9</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s80" value='s80' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S10</button></div>

      </div>
      <div className='row pt-5'>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s81" value='s81' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S11</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s82" value='s82' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S12</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s83" value='s83' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S13</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s84" value='s84' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S14</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s85" value='s85' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S15</button></div>
        <div className='col-1'></div>

        <div className='col-1'></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s86" value='s86' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S16</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s87" value='s87' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S17</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s88" value='s88' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S18</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s89" value='s89' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S19</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s90" value='s90' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S20</button></div>

      </div>
      <div className='row pt-5'>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s91" value='s91' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S11</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s92" value='s92' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S12</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s93" value='s93' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S13</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s94" value='s94' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S14</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s95" value='s95' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S15</button></div>
        <div className='col-1'></div>

        <div className='col-1'></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s96" value='s96' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S16</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s97" value='s97' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S17</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s98" value='s98' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S18</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s99" value='s99' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S19</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s100" value='s100' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S20</button></div>

      </div>

      <div className='row pt-5'>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s101" value='s101' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S11</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s102" value='s102' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S12</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s103" value='s103' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S13</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s104" value='s104' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S14</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s105" value='s105' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S15</button></div>
        <div className='col-1'></div>

        <div className='col-1'></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s106" value='s106' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S16</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s107" value='s107' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S17</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s108" value='s108' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S18</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s109" value='s109' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S19</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s110" value='s110' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S20</button></div>

      </div>
      </div>
  )
}

export default Balcony