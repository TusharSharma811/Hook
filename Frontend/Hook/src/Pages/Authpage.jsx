import React, { useCallback, useState } from "react";
import Navbar from "../Components/Navbar";
import Input from "../Components/Input";


const Authpage = () => {
  const [email , setemail] = useState("");
  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");
  const [varient , setVarient] = useState("login") ;

  const togglevarient = useCallback(()=>{
    setVarient((current)=> current === "login" ? "register" : "login" )
    
  } , [])

  return (
    <div className=" relative w-full h-full bg-[url('/Hero.jpg')] bg-fixed bg-no-repeat bg-cover">
      <div className=" bg-black w-full h-full lg:bg-opacity-50">
        <Navbar />
        <div className="flex justify-center">
          <div className=" bg-black bg-opacity-50 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-lg w-full">
            <h2 className=" translate-x-[40%] mb-8">{varient === "login" ? "Sign in" : "Register"}</h2>
            <div className=" flex flex-col gap-4">
              {varient === "login" ? <> <Input 
                  label={"Email"} 
                  type={"email"}
                  id={"emailinp"}
                  onchange={(e)=> { setemail(e.target.value) }}
               />
               <Input 
                  label={"Password"} 
                  type={"password"}
                  id={"passwordinp"}
                  onchange={(e)=> { setPassword(e.target.value) }}
               /> </> : <>
               <Input 
                  label={"Username"} 
                  type={"text"}
                  id={"usernameinp"}
                  onchange={(e)=> { setUsername(e.target.value) }}
               />
              <Input 
                  label={"Email"} 
                  type={"email"}
                  id={"emailinp"}
                  onchange={(e)=> { setemail(e.target.value) }}
               />
               <Input 
                  label={"Password"} 
                  type={"password"}
                  id={"passwordinp"}
                  onchange={(e)=> { setPassword(e.target.value) }}
               />
               </> }
            
               
            </div>
            <button className=" bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">Login</button>
            <p className=" text-neutral-500 mt-12">{varient === "login" ? "First time using netflix ?" : "Already have an account ?" }<span onClick={togglevarient} className=" text-white ml-1 hover:underline cursor-pointer">{varient === "login" ? "Create new account" : "Login" }</span></p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authpage;
