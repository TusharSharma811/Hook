import jwt from "jsonwebtoken"
import env from "dotenv"

env.config() ;

const generatetoken = (ID )=>{
    const token = jwt.sign({"User_id" : ID} , process.env.salt) ;
    
    return token ;

}

export default generatetoken ;