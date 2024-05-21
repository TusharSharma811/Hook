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
        res.status(400).end() ;
    }
            
            
}
export const login = async (req , res)=>{
    const usercheck = z.object({
        email : z.string().email() ,
        password : z.string().min(6 , {message : "Password too short"}).max(13 , {message : "Password too long"}) 
    })
    try {
        const { email , password} = req.body ;
        if(usercheck.safeParse({email , password})){

        
             const user = await Usermodel.findOne({
                Email : email ,
                Password : password
             })
             console.log(user);
             const token = generatetoken(user._id) ;
            res.json({message : "Login Successfull" , token : token})
            }
    } catch (error) {
        console.log(error);
        res.status(400).end() ;
    }
            
            
}