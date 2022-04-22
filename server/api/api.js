const express=require('express')
const router=express.Router();
const mongoose=require('mongoose');
const Seat = require('../Models/Seat');

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
});


router.post('/booking', function (req, res) {
    let SeatData = {
        seatNo:req.body.seatNo,
        type:req.body.type,
        reserved:req.body.reserved,
        ownerName:req.body.ownerName,
        time:req.body.time
    }
    let seat = new Seat(SeatData)
    seat.save((error, result) => {
        if (error) {
            console.log(error);
        }
        else {
            res.send({ 'message': "Seat Book Success", 'id': result._id });
        }
    })

});

router.get('/allSeat', function(req,res){
    let seat=[];
    let data=Seat.find({}, 'seatNo -_id',function(error,result){
        if(!error){
            
            result.forEach((value)=>{
                seat.push(value.seatNo);
            });

            res.send(seat);
        }
    })
})

router.delete("/deleteRecode",(req,res)=>{
    Seat.deleteMany({},(error,result)=>{
        if(!error){
            res.send("result")
        }
       
    })
    
})

router.get('/getAllData', function(req,res){
    let data=Seat.find({}, 'ownerName seatNo -_id', function(error,result){
        if(!error){
            res.send(result)
        }
    })
})

router.get('/available/:seatNo', function(req,res){
    Seat.find({seatNo:req.params.seatNo}, 'reserved -_id', function(error, result){
        if(!error){
            res.send(result);
        }
    })
})


module.exports=router;