import jwt from "jsonwebtoken" 
import env from "dotenv"


const tokenverification = (req , res, next )=>{
    env.config() ;
    const header = req.headers.authorization ;
    const token = header.split(" ") ;
    
    const state = jwt.verify(token[1] , process.env.salt ) ;
    
    if(!state){
        res.send({message : "Unautorised user"});

    }
    else{
        next() ;
    }
}

export default tokenverification