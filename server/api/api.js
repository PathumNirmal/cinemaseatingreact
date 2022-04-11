const express=require('express')
const router=express.Router();
const mongoose=require('mongoose');

const db ="mongodb+srv://deshan:deshan2233@cluster0.4ynst.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//connect with database
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }, err=>{
    if(err){
        console.log('Error With a Connect MongoDB : ' + err)
    }
    else{
        console.log('Database Connect Successfully')
    }
})


//routes

router.get('/', function(req,res){
    res.send('From api route!');
})

module.exports=router;