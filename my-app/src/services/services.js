import { useNavigate } from 'react-router'
const axios = require('axios');

export class Services{
    navigate=new useNavigate()
    constructor(){

    }
    putBooking(seatNo, name, time, type, available){
       const data={
            seatNo:seatNo,
            type:type,
            reserved:available,
            ownerName:name,
            time:time
        }
        axios.post("http://localhost:3002/booking",data).then((res)=>{
            console.log(res);
            
            this.navigate("/success",{state:{type:type}});
        });
    }

   
    
}

