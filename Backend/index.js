import express from "express"
import db from "./db.js"
import cors from "cors"
import authrouter from "./Router/auth.route.js"
import movierouter from "./Router/movie.route.js"
const app = express();
app.use(express.json())
app.use(cors());
app.use("/auth" , authrouter)
app.use("/" , movierouter)
app.listen("4000" , ()=>{
    console.log("Good to go");
})