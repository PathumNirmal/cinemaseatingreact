import React, { useState, useEffect } from 'react'
import { useLocation, useParams} from 'react-router'
import { Services } from '../services/services';

export const FillPage = (props) => {
const location=useLocation();
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
function dateGet(today){
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return dd + '/' + mm + '/' + yyyy;

}
    const t=new Date();
    const services=new Services();
    const [time, setTime]=useState("")
    const [name, setName]=useState("")
    let {seatNo} = useParams()
    useEffect(()=>{
        setTime(formatAMPM(t) + " " + dateGet(t))
    },[]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        services.putBooking(seatNo,name,time,location.state.type,true)
        
       
    }
    
  return (
    <div>
    <div className='row'>
        <div className='col d-flex justify-content-center'>
            <h2>Booking Information Form</h2>
        </div>
        
    </div>
    <form onSubmit={handleSubmit}>
    <div className='row'>
        <div className='col-6 d-flex justify-content-center'>
            <input type="text" className="form-control" id="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className='col-6 d-flex justify-content-center'>
            <input type="text" className="form-control" id="name" placeholder="Name" disabled={true} value={time}/>
        </div>

    </div>
    <div className='row' style={{marginTop:"10px", paddingLeft:"50px", paddingRight:"50px"}}>
       
        <input type="submit" value="Book A Seat"></input>
        
       
    </div>
    </form>
    </div>
  )
}
