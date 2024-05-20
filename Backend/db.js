import mongoose, { connect } from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const dbURL = process.env.dbUrl

mongoose.connect(dbURL) ;

const db = mongoose.connection ;

db.on("connected" , ()=>{
    console.log("DB is connected");
} )


export default db ;

