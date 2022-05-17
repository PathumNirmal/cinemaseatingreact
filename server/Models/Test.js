const mongoose=require('mongoose')
const Test = mongoose.Schema({
    seatNo:{
        type:String,
        default:""
    }
    
    
});

module.exports=mongoose.model('Test', Test, "Test");