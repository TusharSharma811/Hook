import express from "express"
import { Router } from "express"
import { login , Signup } from "../controller/auth.controller.js";

const router = Router() ;

router.post("/login" , login )
router.post("/signup" , Signup)

export default router