import Router from "express"
const router = Router() ;
import { servemovie } from "../controller/servemovie.controller.js";

router.get("/api/movie" , servemovie) ;
export default router ;