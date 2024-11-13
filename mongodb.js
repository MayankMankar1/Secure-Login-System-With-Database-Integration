const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/Mayank1")
.then(()=>{
    console.log("mongodb connected")
})

.catch(()=>{
    console.log("failed to connect");
})

const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const collection=new mongoose.model("collection1",LoginSchema)

module.exports=collection


