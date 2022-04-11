const express=require('express')
const router=express.Router();
const mongoose=require('mongoose');


//connect with database
// mongoose.connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,}, err=>{
//     if(err){
//         console.log('Error With Connect MongoDB : ' + err)
//     }
//     else{
//         console.log('Database Connect Successfully')
//     }
// })


//routes

router.get('/', function(req,res){
    res.send('From api route!');
})

module.exports=router;