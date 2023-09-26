const mongos = require("mongoose");
const noteSchema = new mongos.Schema({
     title:{
        type: String,
        required : true
     },
     content:{
        type: String,
        required : true
     }
},{timestamps:true});
const noteModel = mongos.model("Note", noteSchema);
const connection = async ()=>{
     return await mongos.connect("mongodb+srv://alaajabdoh1701:WsKEzgWUiwCdApmj@cluster0.7rwa3fi.mongodb.net/")
     .then((res)=>console.log("conncted to dataBase"))
     .catch((err)=>console.log(err.stack))
}
module.exports = {noteModel, connection}