var mongoose=require("mongoose");
var userschema=mongoose.Schema({
  lastName:String,
  firstName:String,
  phone:String,
})
var userModel=mongoose.model('usermodel',userschema)
module.exports=userModel;
