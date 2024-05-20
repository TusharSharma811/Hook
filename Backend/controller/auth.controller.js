import Usermodel from "../models/User.model.js"
import z from "zod"
import generatetoken from "../utils/generatetoken.js"
export const Signup = async (req , res)=>{
    const usercheck = z.object({
        username : z.string() ,
        email : z.string().email() ,
        password : z.string().min(6 , {message : "Password too short"}).max(13 , {message : "Password too long"}) 
    })
    try {
        const {username , email , password} = req.body ;
            const uservalidation = usercheck.safeParse({username , email , password})
            
            if(!uservalidation.success){
                return res.send(uservalidation.error.issues.map((e)=> e.message))

            }

            const newuser = await Usermodel.create({
                Username : username , Email : email , Password : password
            })

            const token = generatetoken(newuser._id ) ;
        
            res.json({
                message : "User Created" ,
                token : token
            })
        
    } catch (error) {
        console.log(error);
        res.json({error : error})
    }
            
            
}
export const login = async (req , res)=>{
    try {
        const { email , password} = req.body ;
             
            const newuser = await Usermodel.create({
                 Email : email , Password : password
            })
            
            console.log(newuser);
            res.json({message : "Logn Successfull"})
        
    } catch (error) {
        console.log(error);
    }
            
            
}