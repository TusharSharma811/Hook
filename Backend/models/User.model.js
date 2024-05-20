import mongoose from "mongoose";
const userschema = new mongoose.Schema({
    Username : {
        type : String ,
        required : true ,
    } ,
    Email :{
        type : String ,
        required : true ,
        unique : true
    } ,
    Password :{
        type : String ,
        required : true
    } ,
    Premium : {
        type : Boolean ,
        default  : false
    }
}) 

const Usermodel = new mongoose.model("User" , userschema) ;
export default Usermodel ;