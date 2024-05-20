import mongoose from "mongoose"

export const servemovie = async (req  ,res)=>
    {
       let filter = req.query.filter || "" ;
        const moviecollection = mongoose.connection.db.collection("movie") ;
       let result = await moviecollection.find({ title : {"$regex" : filter}}).toArray();
       
       res.json(result)

}