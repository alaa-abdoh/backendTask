const express = require("express");
const { connection, noteModel } = require("./Database/noteModel");
const app = express();
app.use(express.json())
connection()
app.post("/notes", async(request, response)=>{
    try{
        const {title, content} =  request.body;
        const note = await noteModel.create({title, content})        
        response.status(201).json({note})
    }catch(err){
        response.status(400).json({message : err.stack})
    }
})
app.get("/notes", async(request, response)=>{
    try{
        const note = await noteModel.find({})        
        response.status(201).json({note})
    }catch(err){
        response.status(400).json({message : err.stack})
    }
})
app.put("/notes/:id", async(request, response)=>{
    try{
        const {title, content} = request.body;
        const note = await noteModel.findByIdAndUpdate(request.params.id, {title, content}, {new: true})        
        response.status(201).json({note})
    }catch(err){
        response.status(400).json({message : err.stack})
    }
})
app.delete("/notes/:id", async(request, response)=>{
    try{
        const note = await noteModel.findByIdAndDelete(request.params.id)        
        response.status(201).json({note})
    }catch(err){
        response.status(400).json({message : err.stack})
    }
})
app.listen(3100,()=>console.log("success server connection"));