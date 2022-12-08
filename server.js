require("./config/db")
const app=require("express")();
const bodyParser=require("express").json;
const port = process.env.PORT || 3000;
const User=require("./models/User")
const cors=require("cors");


app.use(bodyParser())
app.use(cors());
app.get("/",async (req,res)=>{
    res.send("asdfffffffff")
})
app.post("/any",async (req,res)=>{
    console.log("hitterdddd seccess",req);

    
    let user = new User({
        name:req.body.name,
        email:req.body.email
    })
    let use=await user.save();
  
    let useq=await User.insertOne({
        name:req.body.name,
        email:"sec"
    })
    res.send(useq,use)
    
})

app.listen(port,()=>{
    console.log(`alive at ${port}`);
})
