import  Express from "express";
 import path from 'path'
 const app = Express() 
 app.get("/",(req,res)=>{
    /*res.json({
      success:true,
      products:[]

    })*/
    //res.status(400).send("Mari Marzi")
    const pathlocation = path.resolve()
    //res.sendFile(path.join(pathlocation,"./NodeJs/index.html"))
    res.render()
})
 app.listen(5000,()=>{
    console.log( "Server is working");
})
