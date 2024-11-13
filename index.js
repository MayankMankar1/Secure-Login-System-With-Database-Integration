const express=require ("express")
const path=require("path")
const app=express()
const collection=require("./mongodb")
const hbs=require("hbs")
const collection1=require("./mongodb")
const port =process.env.PORT || 3000

const templatepath=path.join(__dirname,'./template')
// const csspath=path.join(__dirname,'./public')

app.use(express.static('public'));
app.use(express.json())
// app.set('views',csspath)
app.set('view engine','hbs')
app.set('views',templatepath)
app.use(express.urlencoded({extended:false}))


app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render('signup')
})

app.post("/signup",async(req,res)=>{

    const data={
        name:req.body.name,
        password:req.body.password
    }

    await collection.insertMany([data])

    res.render("home")
})

app.post("/login",async(req,res)=>{
  
      try{
       const check=await collection.findOne({name:req.body.name})

       if(check.password===req.body.password){
       res.render("home")
       }
       else{
        res.send("wrong password")
       }

      }
      catch{
      res.send("wrong details")
      }
})

app.listen(3000,()=>{
    console.log("port connected");
})


