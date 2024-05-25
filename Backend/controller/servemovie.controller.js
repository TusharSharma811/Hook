import mongoose from "mongoose"

export const servemovie = async (req  ,res)=>
    {
       let filter = req.query.filter || "" ;
        const moviecollection = mongoose.connection.db.collection("movie") ;
        
       let result = await moviecollection.find({ Title : {"$regex" : filter}}).limit(20).toArray() ;
       console.log(result);
       res.json(result)

}
