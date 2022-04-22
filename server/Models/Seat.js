const mongoose=require('mongoose')
const Seat = mongoose.Schema({
    seatNo:{
        type:String,
        default:""
    },
    type:{
        type:String,
        default:"No type"
    },
    reserved:{
        type:Boolean,
        default:false
    },
    ownerName:{
        type:String,
        default:"No Owner"
    },
    time:{
        type:String,
        default:""
    }
    
});

module.exports=mongoose.model('Seat', Seat, "Seat");