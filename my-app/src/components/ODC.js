import ReactTooltip from 'react-tooltip';
import React,{useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom";
import { useAlert } from 'react-alert'

import '../../src/App.css';
const axios = require('axios');
const ODC = () => {
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
        if(thenum>=1 & thenum<=70){
          document.getElementById(value).setAttribute("class","btn btn-danger zoom");
        }
        
      });
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
    navigate("/fill/"+value, {state:{type:"ODC"}})
    }
    else{
      alert.show('This Seat is not available')
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
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s6" value='s6' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S6</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s7" value='s7' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S7</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s8" value='s8' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S8</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s9" value='s9' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S9</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s10" value='s10' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S10</button></div>

      </div>
      <div className='row pt-5'>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s11" value='s11' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S11</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s12" value='s12' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S12</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s13" value='s13' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S13</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s14" value='s14' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S14</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s15" value='s15' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S15</button></div>
        <div className='col-1'></div>

        <div className='col-1'></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s16" value='s16' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S16</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s17" value='s17' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S17</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s18" value='s18' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S18</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s19" value='s19' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S19</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s20" value='s20' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S20</button></div>

      </div>

      <div className='row pt-5'>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s21" value='s21' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S21</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s22" value='s22' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S22</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s23" value='s23' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S23</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s24" value='s24' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S24</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s25" value='s25' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S25</button></div>
        <div className='col-1'></div>

        <div className='col-1'></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s26" value='s26' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S26</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s27" value='s27' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S27</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s28" value='s28' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S28</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s29" value='s29' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S29</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s30" value='s30' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S30</button></div>

      </div>

      <div className='row pt-5'>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s31" value='s31' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S31</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s32" value='s32' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S32</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s33" value='s33' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S33</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s34" value='s34' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S34</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s35" value='s35' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S35</button></div>
        <div className='col-1'></div>

        <div className='col-1'></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s36" value='s36' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S36</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s37" value='s37' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S37</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s38" value='s38' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S38</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s39" value='s39' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S39</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s40" value='s40' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S40</button></div>

      </div>

      <div className='row pt-5'>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s41" value='s41' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S41</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s42" value='s42' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S42</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s43" value='s43' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S43</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s44" value='s44' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S44</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s45" value='s45' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S45</button></div>
        <div className='col-1'></div>

        <div className='col-1'></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s46" value='s46' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S46</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s47" value='s47' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S47</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s48" value='s48' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S48</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s49" value='s49' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S49</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s50" value='s50' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S50</button></div>

      </div>

      <div className='row pt-5'>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s51" value='s51' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S51</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s52" value='s52' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S52</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s53" value='s53' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S53</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s54" value='s54' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S54</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s55" value='s55' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S55</button></div>
        <div className='col-1'></div>

        <div className='col-1'></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s56" value='s56' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S56</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s57" value='s57' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S57</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s58" value='s58' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S58</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s59" value='s59' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S59</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s60" value='s60' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S60</button></div>

      </div>

      <div className='row pt-5'>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s61" value='s61' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S61</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s62" value='s62' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S62</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s63" value='s63' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S63</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s64" value='s64' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S64</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s65" value='s65' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S65</button></div>
        <div className='col-1'></div>

        <div className='col-1'></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s66" value='s66' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S66</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s67" value='s67' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S67</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s68" value='s68' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S68</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s69" value='s69' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S69</button></div>
        <div className='col-1 d-flex justify-content-center d-flex align-items-center'><button className='btn btn-success zoom' id="s70" value='s70' data-tip={available}  onMouseOver={(e)=>Cheking(e.target.value)} onClick={e => Booking(e.target.value)}>S70</button></div>

      </div>
    </div>
  )
}

export default ODC