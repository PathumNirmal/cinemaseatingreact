import React from 'react'
const axios = require('axios');
export const Admin = () => {
    function clean(){
        axios.delete("http://localhost:3002/deleteRecode").then(res=>{
            console.log(res.data);
        })
    }
  return (
    <div>
        <button className='btn btn-danger' onClick={clean}>Clean Recodes</button>
    </div>
  )
}
